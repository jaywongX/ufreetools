<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ $t('tools.seven-parameter-transformer.inputTitle') }}
                </h2>

                <section class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.sourceSystemTitle') }}
                    </h3>
                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-400">
                        {{ $t('tools.seven-parameter-transformer.coordinateSystems.wgs84') }}
                    </label>
                    <select v-model="sourceSystem" class="form-select w-full">
                        <option value="wgs84">{{ $t('tools.seven-parameter-transformer.coordinateSystems.wgs84') }}</option>
                        <option value="cgcs2000">{{ $t('tools.seven-parameter-transformer.coordinateSystems.cgcs2000') }}</option>
                        <option value="beijing54">{{ $t('tools.seven-parameter-transformer.coordinateSystems.beijing54') }}</option>
                        <option value="xian80">{{ $t('tools.seven-parameter-transformer.coordinateSystems.xian80') }}</option>
                        <option value="local">{{ $t('tools.seven-parameter-transformer.coordinateSystems.local') }}</option>
                        <option value="custom">{{ $t('tools.seven-parameter-transformer.coordinateSystems.custom') }}</option>
                    </select>
                    <div v-if="sourceSystem === 'local' || sourceSystem === 'custom'" class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm block mb-1">{{ $t('tools.seven-parameter-transformer.ellipsoidFields.a') }}</label>
                            <input v-model.number="customEllipsoid.source.a" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm block mb-1">{{ $t('tools.seven-parameter-transformer.ellipsoidFields.f') }}</label>
                            <input v-model.number="customEllipsoid.source.f" type="number" class="form-input w-full" />
                        </div>
                    </div>
                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-400">
                        {{ $t('tools.seven-parameter-transformer.targetSystemTitle') }}
                    </label>
                    <select v-model="targetSystem" class="form-select w-full">
                        <option value="wgs84">{{ $t('tools.seven-parameter-transformer.coordinateSystems.wgs84') }}</option>
                        <option value="cgcs2000">{{ $t('tools.seven-parameter-transformer.coordinateSystems.cgcs2000') }}</option>
                        <option value="beijing54">{{ $t('tools.seven-parameter-transformer.coordinateSystems.beijing54') }}</option>
                        <option value="xian80">{{ $t('tools.seven-parameter-transformer.coordinateSystems.xian80') }}</option>
                        <option value="local">{{ $t('tools.seven-parameter-transformer.coordinateSystems.local') }}</option>
                        <option value="custom">{{ $t('tools.seven-parameter-transformer.coordinateSystems.custom') }}</option>
                    </select>
                    <div v-if="targetSystem === 'local' || targetSystem === 'custom'" class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm block mb-1">{{ $t('tools.seven-parameter-transformer.ellipsoidFields.a') }}</label>
                            <input v-model.number="customEllipsoid.target.a" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm block mb-1">{{ $t('tools.seven-parameter-transformer.ellipsoidFields.f') }}</label>
                            <input v-model.number="customEllipsoid.target.f" type="number" class="form-input w-full" />
                        </div>
                    </div>
                </section>

                <section class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.projectionTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm">{{ $t('tools.seven-parameter-transformer.sourceSystemTitle') }}</label>
                            <select v-model="sourceProjection" class="form-select w-full">
                                <option value="gauss">{{ $t('tools.seven-parameter-transformer.projectionSystems.gauss') }}</option>
                                <option value="utm">{{ $t('tools.seven-parameter-transformer.projectionSystems.utm') }}</option>
                                <option value="mercator">{{ $t('tools.seven-parameter-transformer.projectionSystems.mercator') }}</option>
                                <option value="custom">{{ $t('tools.seven-parameter-transformer.projectionSystems.custom') }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm">{{ $t('tools.seven-parameter-transformer.targetSystemTitle') }}</label>
                            <select v-model="targetProjection" class="form-select w-full">
                                <option value="gauss">{{ $t('tools.seven-parameter-transformer.projectionSystems.gauss') }}</option>
                                <option value="utm">{{ $t('tools.seven-parameter-transformer.projectionSystems.utm') }}</option>
                                <option value="mercator">{{ $t('tools.seven-parameter-transformer.projectionSystems.mercator') }}</option>
                                <option value="custom">{{ $t('tools.seven-parameter-transformer.projectionSystems.custom') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="rounded-lg border border-gray-200 dark:border-gray-700 p-3 space-y-3">
                            <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-300">{{ $t('tools.seven-parameter-transformer.sourceSystemTitle') }}</h4>
                            <div class="grid grid-cols-1 gap-2">
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.zoneWidth') }}
                                </label>
                                <input v-model.number="projectionOptions.source.zoneWidth" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.centralMeridian') }}
                                </label>
                                <input v-model.number="projectionOptions.source.centralMeridian" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.scaleFactor') }}
                                </label>
                                <input v-model.number="projectionOptions.source.scaleFactor" type="number" step="0.0001" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.falseEasting') }}
                                </label>
                                <input v-model.number="projectionOptions.source.falseEasting" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.falseNorthing') }}
                                </label>
                                <input v-model.number="projectionOptions.source.falseNorthing" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.altitudeOffset') }}
                                </label>
                                <input v-model.number="projectionOptions.source.altitudeOffset" type="number" class="form-input w-full" />
                            </div>
                        </div>
                        <div class="rounded-lg border border-gray-200 dark:border-gray-700 p-3 space-y-3">
                            <h4 class="text-sm font-semibold text-gray-600 dark:text-gray-300">{{ $t('tools.seven-parameter-transformer.targetSystemTitle') }}</h4>
                            <div class="grid grid-cols-1 gap-2">
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.zoneWidth') }}
                                </label>
                                <input v-model.number="projectionOptions.target.zoneWidth" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.centralMeridian') }}
                                </label>
                                <input v-model.number="projectionOptions.target.centralMeridian" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.scaleFactor') }}
                                </label>
                                <input v-model.number="projectionOptions.target.scaleFactor" type="number" step="0.0001" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.falseEasting') }}
                                </label>
                                <input v-model.number="projectionOptions.target.falseEasting" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.falseNorthing') }}
                                </label>
                                <input v-model.number="projectionOptions.target.falseNorthing" type="number" class="form-input w-full" />
                                <label class="text-xs text-gray-500">
                                    {{ $t('tools.seven-parameter-transformer.projectionFields.altitudeOffset') }}
                                </label>
                                <input v-model.number="projectionOptions.target.altitudeOffset" type="number" class="form-input w-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                            {{ $t('tools.seven-parameter-transformer.manualTitle') }}
                        </h3>
                        <div class="text-sm text-gray-500">{{ $t('tools.seven-parameter-transformer.coordinateType') }}</div>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <label class="flex items-center gap-2 text-sm">
                            <input type="radio" value="geodetic" v-model="manualType">
                            {{ $t('tools.seven-parameter-transformer.geodeticLabel') }}
                        </label>
                        <label class="flex items-center gap-2 text-sm">
                            <input type="radio" value="cartesian" v-model="manualType">
                            {{ $t('tools.seven-parameter-transformer.cartesianLabel') }}
                        </label>
                        <label class="flex items-center gap-2 text-sm">
                            <input type="radio" value="projected" v-model="manualType">
                            {{ $t('tools.seven-parameter-transformer.projectedLabel') }}
                        </label>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div v-if="manualType === 'geodetic'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.B') }}</label>
                            <input v-model="manualInputs.B" type="text" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'geodetic'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.L') }}</label>
                            <input v-model="manualInputs.L" type="text" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'geodetic'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.H') }}</label>
                            <input v-model="manualInputs.H" type="number" class="form-input w-full" />
                        </div>

                        <div v-if="manualType === 'cartesian'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.X') }}</label>
                            <input v-model="manualInputs.X" type="number" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'cartesian'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.Y') }}</label>
                            <input v-model="manualInputs.Y" type="number" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'cartesian'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.Z') }}</label>
                            <input v-model="manualInputs.Z" type="number" class="form-input w-full" />
                        </div>

                        <div v-if="manualType === 'projected'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.E') }}</label>
                            <input v-model="manualInputs.E" type="number" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'projected'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.N') }}</label>
                            <input v-model="manualInputs.N" type="number" class="form-input w-full" />
                        </div>
                        <div v-if="manualType === 'projected'">
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.manualFields.PH') }}</label>
                            <input v-model="manualInputs.PH" type="number" class="form-input w-full" />
                        </div>
                    </div>
                    <button class="btn btn-secondary w-full" @click="appendManualPoint">
                        {{ $t('tools.seven-parameter-transformer.appendPoint') }}
                    </button>
                </section>

                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.interactiveTitle') }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ $t('tools.seven-parameter-transformer.interactiveHint') }}
                    </p>
                    <div class="picker-grid relative h-48 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 cursor-crosshair overflow-hidden"
                        @click="handlePickerClick">
                        <div class="absolute inset-x-0 top-1/2 border-t border-gray-300 dark:border-gray-600"></div>
                        <div class="absolute inset-y-0 left-1/2 border-l border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        {{ $t('tools.seven-parameter-transformer.interactiveCoords') }}:
                        E {{ pickerCoords.E.toFixed(3) }} m /
                        N {{ pickerCoords.N.toFixed(3) }} m
                    </p>
                </section>

                <section class="space-y-3">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {{ $t('tools.seven-parameter-transformer.delimiterLabel') }}
                    </label>
                    <input v-model="delimiter" class="form-input w-full" maxlength="3" />
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {{ $t('tools.seven-parameter-transformer.batchTitle') }}
                    </label>
                    <textarea v-model="batchText" rows="6" class="form-textarea w-full"
                        :placeholder="$t('tools.seven-parameter-transformer.batchPlaceholder')"></textarea>
                    <div class="flex gap-3">
                        <button class="btn btn-secondary flex-1" @click="loadSample">
                            {{ $t('tools.seven-parameter-transformer.loadSample') }}
                        </button>
                        <button class="btn btn-primary flex-1" @click="batchText = ''">
                            {{ $t('tools.seven-parameter-transformer.clearAll') }}
                        </button>
                    </div>
                </section>

                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.fileTitle') }}
                    </h3>
                    <div class="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer"
                        :class="{ 'border-blue-500 bg-blue-50': isDragging }"
                        @drop.prevent="handleDrop"
                        @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false"
                        @click="fileInput?.click()">
                        <input type="file" multiple accept=".csv,.txt" class="hidden" ref="fileInput" @change="handleFileChange">
                        <p class="text-gray-500">{{ $t('tools.seven-parameter-transformer.dragTip') }}</p>
                        <p class="text-xs text-gray-400">{{ $t('tools.seven-parameter-transformer.supported') }}</p>
                    </div>
                </section>

                <section class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.transformTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.dX') }}</label>
                            <input v-model.number="parameters.dX" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.dY') }}</label>
                            <input v-model.number="parameters.dY" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.dZ') }}</label>
                            <input v-model.number="parameters.dZ" type="number" class="form-input w-full" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.rX') }}</label>
                            <input v-model.number="parameters.rX" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.rY') }}</label>
                            <input v-model.number="parameters.rY" type="number" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.rZ') }}</label>
                            <input v-model.number="parameters.rZ" type="number" class="form-input w-full" />
                        </div>
                    </div>
                    <div>
                        <label class="text-sm">{{ $t('tools.seven-parameter-transformer.parameterFields.scale') }}</label>
                        <input v-model.number="parameters.scale" type="number" step="0.01" class="form-input w-full" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.templateLabel') }}</label>
                            <select v-model="templateKey" class="form-select w-full">
                                <option value="none">-</option>
                                <option value="wgs84-cgcs2000">WGS84 → CGCS2000</option>
                                <option value="beijing54-xian80">Beijing54 → Xi'an80</option>
                            </select>
                        </div>
                        <div class="flex items-end">
                            <button class="btn btn-secondary w-full" @click="applyHistoryParams" :disabled="!lastHistory">
                                {{ $t('tools.seven-parameter-transformer.applyHistory') }}
                            </button>
                        </div>
                    </div>
                </section>

                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.solverTitle') }}
                    </h3>
                    <textarea v-model="solverText" rows="5" class="form-textarea w-full"
                        :placeholder="$t('tools.seven-parameter-transformer.solverPlaceholder')"></textarea>
                    <button class="btn btn-primary w-full" @click="solveParameters">
                        {{ $t('tools.seven-parameter-transformer.solveBtn') }}
                    </button>
                    <textarea v-if="solverResiduals" v-model="solverResiduals" rows="4" class="form-textarea w-full mt-2"
                        readonly></textarea>
                </section>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-6">
                <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                        {{ $t('tools.seven-parameter-transformer.outputTitle') }}
                    </h2>
                    <div class="flex flex-wrap gap-2">
                        <button class="btn btn-primary" @click="convertPoints">
                            {{ $t('tools.seven-parameter-transformer.conversionBtn') }}
                        </button>
                        <button class="btn btn-secondary" @click="exportCsv" :disabled="!hasOutput">
                            {{ $t('tools.seven-parameter-transformer.exportBtn') }}
                        </button>
                    </div>
                </div>

                <section class="grid grid-cols-2 gap-4">
                    <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div class="text-sm text-gray-500">{{ $t('tools.seven-parameter-transformer.statsLabels.rmse') }}</div>
                        <div class="text-2xl font-semibold">{{ stats.rmse.toFixed(4) }} m</div>
                    </div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div class="text-sm text-gray-500">{{ $t('tools.seven-parameter-transformer.statsLabels.residualMax') }}</div>
                        <div class="text-2xl font-semibold">{{ stats.maxResidual.toFixed(4) }} m</div>
                    </div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div class="text-sm text-gray-500">{{ $t('tools.seven-parameter-transformer.statsLabels.ci') }}</div>
                        <div class="text-2xl font-semibold">{{ stats.ci.toFixed(4) }} m</div>
                    </div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div class="text-sm text-gray-500">{{ $t('tools.seven-parameter-transformer.statsLabels.pointCount') }}</div>
                        <div class="text-2xl font-semibold">{{ stats.count }}</div>
                    </div>
                </section>

                <section class="space-y-2">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.seven-parameter-transformer.precisionTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.precisionFields.coordinate') }}</label>
                            <input v-model.number="precision.coordinate" type="number" min="0" max="8"
                                class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.precisionFields.angle') }}</label>
                            <input v-model.number="precision.angle" type="number" min="0" max="8" class="form-input w-full" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.seven-parameter-transformer.precisionFields.iterations') }}</label>
                            <input v-model.number="precision.iterations" type="number" step="0.0001"
                                class="form-input w-full" />
                        </div>
                    </div>
                </section>

                <section>
                    <label class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 block">
                        {{ $t('tools.seven-parameter-transformer.outputSummary') }}
                    </label>
                    <textarea v-model="convertedText" rows="10" class="form-textarea w-full" readonly></textarea>
                </section>

                <section class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                            {{ $t('tools.seven-parameter-transformer.processTitle') }}
                        </h3>
                        <button class="text-sm text-blue-600" @click="toggleProcess">
                            {{ $t('tools.seven-parameter-transformer.processToggle') }}
                        </button>
                    </div>
                    <pre v-if="showProcess" class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-xs overflow-auto max-h-64">{{ processLog }}</pre>
                    <button class="btn btn-secondary w-full" @click="copyProcess">
                        {{ $t('tools.seven-parameter-transformer.processCopy') }}
                    </button>
                </section>
            </div>
        </div>
        <SevenParameterTransformerArticle class="mt-12" />
    </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SevenParameterTransformerArticle from './SevenParameterTransformerArticle.vue'

const { t } = useI18n()

const sourceSystem = ref('wgs84')
const targetSystem = ref('cgcs2000')
const customEllipsoid = reactive({
    source: { a: 6378137, f: 298.257223563 },
    target: { a: 6378137, f: 298.257223563 }
})

const sourceProjection = ref('gauss')
const targetProjection = ref('gauss')
const projectionOptions = reactive({
    source: {
        zoneWidth: 6,
        centralMeridian: 111,
        falseEasting: 500000,
        falseNorthing: 0,
        scaleFactor: 1,
        altitudeOffset: 0
    },
    target: {
        zoneWidth: 6,
        centralMeridian: 111,
        falseEasting: 500000,
        falseNorthing: 0,
        scaleFactor: 1,
        altitudeOffset: 0
    }
})

const manualType = ref('geodetic')
const manualInputs = reactive({
    B: '',
    L: '',
    H: '',
    X: '',
    Y: '',
    Z: '',
    E: '',
    N: '',
    PH: ''
})
const pickerCoords = ref({ E: 0, N: 0 })
const delimiter = ref(',')
const batchText = ref('')
const fileInput = ref(null)
const isDragging = ref(false)

const parameters = reactive({
    dX: 0,
    dY: 0,
    dZ: 0,
    rX: 0,
    rY: 0,
    rZ: 0,
    scale: 0
})

const templateKey = ref('none')
const lastHistory = ref(null)

const solverText = ref('')
const solverResiduals = ref('')

const convertedPoints = ref([])
const hasOutput = computed(() => convertedPoints.value.length > 0)
const convertedText = ref('')
const processLog = ref('')
const showProcess = ref(true)

const stats = reactive({
    rmse: 0,
    maxResidual: 0,
    ci: 0,
    count: 0
})

const precision = reactive({
    coordinate: 4,
    angle: 6,
    iterations: 0.0001
})

const ellipsoids = {
    wgs84: { a: 6378137, f: 298.257223563 },
    cgcs2000: { a: 6378137, f: 298.257222101 },
    beijing54: { a: 6378245, f: 298.3 },
    xian80: { a: 6378140, f: 298.257 },
    local: { a: 6378137, f: 298.257 },
    custom: { a: 6378137, f: 298.257 }
}

const templateMap = {
    none: null,
    'wgs84-cgcs2000': { dX: -1.2, dY: 0.9, dZ: 0.8, rX: 0.05, rY: -0.03, rZ: 0.02, scale: 0.1 },
    'beijing54-xian80': { dX: -15.7, dY: -1.2, dZ: -10.3, rX: 0.15, rY: 0.25, rZ: -0.32, scale: 0.8 }
}

watch(templateKey, (val) => {
    if (templateMap[val]) {
        Object.assign(parameters, templateMap[val])
        notify(t('tools.seven-parameter-transformer.parameterApplied'))
    }
})

function appendManualPoint() {
    let line = ''
    if (manualType.value === 'geodetic') {
        line = `${manualInputs.B || 0}${delimiter.value}${manualInputs.L || 0}${delimiter.value}${manualInputs.H || 0}`
    } else if (manualType.value === 'cartesian') {
        line = `${manualInputs.X || 0}${delimiter.value}${manualInputs.Y || 0}${delimiter.value}${manualInputs.Z || 0}`
    } else {
        line = `${manualInputs.E || 0}${delimiter.value}${manualInputs.N || 0}${delimiter.value}${manualInputs.PH || 0}`
    }
    batchText.value = batchText.value ? `${batchText.value.trim()}\n${line}` : line
}

function handlePickerClick(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5
    const relativeY = 0.5 - (event.clientY - rect.top) / rect.height
    const scale = 1000
    const baseE = projectionOptions.source.falseEasting || 0
    const baseN = projectionOptions.source.falseNorthing || 0
    const E = baseE + relativeX * scale
    const N = baseN + relativeY * scale
    pickerCoords.value = { E, N }
    manualType.value = 'projected'
    manualInputs.E = E.toFixed(3)
    manualInputs.N = N.toFixed(3)
    if (!manualInputs.PH) {
        manualInputs.PH = 0
    }
}

function loadSample() {
    batchText.value = [
        '34.2333,108.9532,512.4,Sample_A',
        '34.2335,108.9538,513.1,Sample_B',
        '34.2340,108.9545,513.4,Sample_C'
    ].join('\n')
    solverText.value = [
        '3771793.97,140253.34,5124324.12 => 3771794.08,140253.46,5124324.75',
        '3771794.88,140254.11,5124325.04 => 3771794.96,140254.27,5124325.65',
        '3771795.67,140255.02,5124325.77 => 3771795.81,140255.19,5124326.48'
    ].join('\n')
    notify(t('tools.seven-parameter-transformer.sampleLoaded'))
}

function handleFileChange(e) {
    const files = Array.from(e.target.files || [])
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = (evt) => {
            const text = evt.target.result
            batchText.value = batchText.value ? `${batchText.value}\n${text}` : text
        }
        reader.readAsText(file, 'utf-8')
    })
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

function handleDrop(event) {
    isDragging.value = false
    const files = Array.from(event.dataTransfer.files || [])
    if (!files.length) return
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = (evt) => {
            const text = evt.target.result
            batchText.value = batchText.value ? `${batchText.value}\n${text}` : text
        }
        reader.readAsText(file, 'utf-8')
    })
}

function parseInputPoints() {
    const lines = batchText.value
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
    if (!lines.length) return []

    const delim = delimiter.value || ','
    return lines.map((line, idx) => {
        const parts = line.split(delim).map(value => value.trim())
        return {
            label: parts[3] || `P_${idx + 1}`,
            raw: parts
        }
    })
}

function convertPoints() {
    processLog.value = ''
    const parsed = parseInputPoints()
    if (!parsed.length) {
        notify(t('tools.seven-parameter-transformer.invalidInput'))
        return
    }

    logProcess('parsing', `${parsed.length} records`)

    const sourceEllipsoid = getEllipsoid(sourceSystem.value, customEllipsoid.source)
    const targetEllipsoid = getEllipsoid(targetSystem.value, customEllipsoid.target)

    const outputs = []
    parsed.forEach(item => {
        const prepared = prepareInput(item.raw, sourceEllipsoid, sourceProjection.value, projectionOptions.source)
        logProcess('converting', `${item.label}: XYZ ${prepared.cartesian.X.toFixed(3)}, ${prepared.cartesian.Y.toFixed(3)}, ${prepared.cartesian.Z.toFixed(3)}`)
        const transformed = applySevenParams(prepared.cartesian)
        const targetCartesian = reprojectEllipsoid(transformed, sourceEllipsoid, targetEllipsoid)
        const targetGeodetic = cartesianToGeodetic(targetCartesian.X, targetCartesian.Y, targetCartesian.Z, targetEllipsoid, precision.iterations)
        const isMercator = targetProjection.value === 'mercator'
        const projected = isMercator
            ? mercatorForward(targetGeodetic, targetEllipsoid, projectionOptions.target)
            : transverseMercatorForward(targetGeodetic, targetEllipsoid, projectionOptions.target)
        logProcess('projecting', `${item.label}: EN ${projected.E.toFixed(3)}, ${projected.N.toFixed(3)}`)

        const formatted = formatOutput(item.label, {
            geodetic: targetGeodetic,
            cartesian: targetCartesian,
            projected
        })
        outputs.push(formatted)
    })

    convertedPoints.value = outputs
    convertedText.value = outputs.map(o => o.text).join('\n')
    stats.count = outputs.length
    if (lastHistory.value?.residuals?.length) {
        updateStats(lastHistory.value.residuals)
    } else {
        stats.rmse = 0
        stats.maxResidual = 0
        stats.ci = 0
    }
    logProcess('finishing', t('tools.seven-parameter-transformer.conversionDone'))
    notify(t('tools.seven-parameter-transformer.conversionDone'))
}

function prepareInput(values, ellipsoid, projType, projOptions) {
    const type = detectInputType(values)
    if (type === 'geodetic') {
        const B = toRadians(parseAngle(values[0]))
        const L = toRadians(parseAngle(values[1]))
        const H = parseFloat(values[2] || 0)
        const cartesian = geodeticToCartesian(B, L, H, ellipsoid)
        return { geodetic: { B, L, H }, cartesian }
    }
    if (type === 'cartesian') {
        return {
            cartesian: {
                X: parseFloat(values[0]),
                Y: parseFloat(values[1]),
                Z: parseFloat(values[2])
            }
        }
    }
    const projected = {
        E: parseFloat(values[0]),
        N: parseFloat(values[1]),
        H: parseFloat(values[2] || 0)
    }
    const geodetic = projType === 'mercator'
        ? mercatorInverse(projected, ellipsoid, projOptions)
        : transverseMercatorInverse(projected, ellipsoid, projOptions)
    const cartesian = geodeticToCartesian(geodetic.B, geodetic.L, geodetic.H, ellipsoid)
    return { geodetic, cartesian }
}

function detectInputType(parts) {
    if (manualType.value === 'cartesian') return 'cartesian'
    if (manualType.value === 'projected') return 'projected'
    return 'geodetic'
}

function getEllipsoid(system, custom) {
    const base = (system === 'local' || system === 'custom') ? custom : ellipsoids[system]
    const inverseF = base.f || 298.257223563
    const flattening = 1 / inverseF
    const b = base.a * (1 - flattening)
    return { a: base.a, f: inverseF, b }
}

function geodeticToCartesian(B, L, H, ellipsoid) {
    const e2 = calcE2(ellipsoid)
    const sinB = Math.sin(B)
    const cosB = Math.cos(B)
    const N = ellipsoid.a / Math.sqrt(1 - e2 * sinB * sinB)
    return {
        X: (N + H) * cosB * Math.cos(L),
        Y: (N + H) * cosB * Math.sin(L),
        Z: (N * (1 - e2) + H) * sinB
    }
}

function cartesianToGeodetic(X, Y, Z, ellipsoid, threshold = 1e-4) {
    const e2 = calcE2(ellipsoid)
    const p = Math.sqrt(X * X + Y * Y)
    const theta = Math.atan((Z * ellipsoid.a) / (p * ellipsoid.b))
    const sinTheta = Math.sin(theta)
    const cosTheta = Math.cos(theta)
    const B = Math.atan((Z + calcEPrime2(ellipsoid) * ellipsoid.b * Math.pow(sinTheta, 3)) /
        (p - e2 * ellipsoid.a * Math.pow(cosTheta, 3)))
    let L = Math.atan2(Y, X)
    let H = p / Math.cos(B) - ellipsoid.a / Math.sqrt(1 - e2 * Math.sin(B) * Math.sin(B))
    let prevB = 0
    let currentB = B
    while (Math.abs(currentB - prevB) > threshold) {
        prevB = currentB
        const sinB = Math.sin(currentB)
        const N = ellipsoid.a / Math.sqrt(1 - e2 * sinB * sinB)
        H = p / Math.cos(currentB) - N
        currentB = Math.atan((Z) / (p * (1 - e2 * N / (N + H))))
    }
    return { B: currentB, L, H }
}

function applySevenParams(coord, paramSet = parameters) {
    const rx = toRadians((paramSet.rX || 0) / 3600)
    const ry = toRadians((paramSet.rY || 0) / 3600)
    const rz = toRadians((paramSet.rZ || 0) / 3600)
    const m = (paramSet.scale || 0) * 1e-6
    const X = (paramSet.dX || 0) + (1 + m) * coord.X - rz * coord.Y + ry * coord.Z
    const Y = (paramSet.dY || 0) + rz * coord.X + (1 + m) * coord.Y - rx * coord.Z
    const Z = (paramSet.dZ || 0) - ry * coord.X + rx * coord.Y + (1 + m) * coord.Z
    return { X, Y, Z }
}

function reprojectEllipsoid(cartesian, sourceEllipsoid, targetEllipsoid) {
    if (sourceEllipsoid.a === targetEllipsoid.a && sourceEllipsoid.f === targetEllipsoid.f) {
        return cartesian
    }
    const geodetic = cartesianToGeodetic(cartesian.X, cartesian.Y, cartesian.Z, sourceEllipsoid, precision.iterations)
    return geodeticToCartesian(geodetic.B, geodetic.L, geodetic.H, targetEllipsoid)
}

function transverseMercatorForward(geodetic, ellipsoid, options) {
    const e2 = calcE2(ellipsoid)
    const lon0 = toRadians(options.centralMeridian ?? 0)
    const k0 = options.scaleFactor || 1
    const falseE = options.falseEasting || 0
    const falseN = options.falseNorthing || 0
    const B = geodetic.B
    const L = geodetic.L
    const dL = L - lon0
    const sinB = Math.sin(B)
    const cosB = Math.cos(B)
    const t = Math.tan(B)
    const eta2 = calcEta2(ellipsoid, B)
    const N = ellipsoid.a / Math.sqrt(1 - e2 * sinB * sinB)
    const M = calcMeridionalArc(B, ellipsoid)

    const x = k0 * (M + N * t * (Math.pow(dL, 2) / 2 +
        (5 - t * t + 9 * eta2 + 4 * eta2 * eta2) * Math.pow(dL, 4) / 24))

    const y = k0 * (N * (dL +
        (1 - t * t + eta2) * Math.pow(dL, 3) / 6 +
        (5 - 18 * t * t + t * t * t * t + 14 * eta2 - 58 * t * t * eta2) * Math.pow(dL, 5) / 120))

    return {
        E: y + falseE,
        N: x + falseN,
        H: geodetic.H + (options.altitudeOffset || 0)
    }
}

function transverseMercatorInverse(projected, ellipsoid, options) {
    const e2 = calcE2(ellipsoid)
    const lon0 = toRadians(options.centralMeridian ?? 0)
    const k0 = options.scaleFactor || 1
    const falseE = options.falseEasting || 0
    const falseN = options.falseNorthing || 0
    const x = (projected.N - falseN) / k0
    const y = (projected.E - falseE) / k0
    const e4 = e2 * e2
    const e6 = e4 * e2
    const mu = x / (ellipsoid.a * (1 - e2 / 4 - 3 * e4 / 64 - 5 * e6 / 256))
    const e1 = (1 - Math.sqrt(1 - e2)) / (1 + Math.sqrt(1 - e2))
    const e1sq = e1 * e1
    const e1cub = e1sq * e1
    const e1four = e1sq * e1sq
    let B1 = mu +
        (3 * e1 / 2 - 27 * e1cub / 32) * Math.sin(2 * mu) +
        (21 * e1sq / 16 - 55 * e1four / 32) * Math.sin(4 * mu) +
        (151 * e1cub / 96) * Math.sin(6 * mu)
    const sinB1 = Math.sin(B1)
    const cosB1 = Math.cos(B1)
    const t1 = Math.tan(B1)
    const ePrime2 = calcEPrime2(ellipsoid)
    const eta12 = ePrime2 * cosB1 * cosB1
    const N1 = ellipsoid.a / Math.sqrt(1 - e2 * sinB1 * sinB1)
    const R1 = N1 * (1 - e2) / (1 - e2 * sinB1 * sinB1)
    const D = y / (N1 * cosB1)

    const B = B1 - (N1 * t1 / R1) * (D * D / 2 -
        (5 + 3 * t1 * t1 + 10 * eta12 - 4 * eta12 * eta12 - 9 * ePrime2) * Math.pow(D, 4) / 24 +
        (61 + 90 * t1 * t1 + 298 * eta12 + 45 * t1 * t1 * t1 * t1 - 252 * eta12 * t1 * t1 - 3 * eta12 * eta12) * Math.pow(D, 6) / 720)

    const L = lon0 + (D - (1 + 2 * t1 * t1 + eta12) * Math.pow(D, 3) / 6 +
        (5 - 2 * eta12 + 28 * t1 * t1 - 3 * eta12 * eta12 + 8 * ePrime2 + 24 * t1 * t1 * t1 * t1) * Math.pow(D, 5) / 120) / cosB1

    return { B, L, H: projected.H - (options.altitudeOffset || 0) }
}

function mercatorForward(geodetic, ellipsoid, options) {
    const e = Math.sqrt(calcE2(ellipsoid))
    const lon0 = toRadians(options.centralMeridian ?? 0)
    const k0 = options.scaleFactor || 1
    const x = ellipsoid.a * k0 * (geodetic.L - lon0)
    const y = ellipsoid.a * k0 * Math.log(Math.tan(Math.PI / 4 + geodetic.B / 2) *
        Math.pow((1 - e * Math.sin(geodetic.B)) / (1 + e * Math.sin(geodetic.B)), e / 2))
    return {
        E: x + (options.falseEasting || 0),
        N: y + (options.falseNorthing || 0),
        H: geodetic.H + (options.altitudeOffset || 0)
    }
}

function mercatorInverse(projected, ellipsoid, options) {
    const e = Math.sqrt(calcE2(ellipsoid))
    const lon0 = toRadians(options.centralMeridian ?? 0)
    const k0 = options.scaleFactor || 1
    const x = (projected.E - (options.falseEasting || 0)) / (ellipsoid.a * k0)
    const y = (projected.N - (options.falseNorthing || 0)) / (ellipsoid.a * k0)
    const L = lon0 + x
    let B = 2 * Math.atan(Math.exp(y)) - Math.PI / 2
    let prev = 0
    while (Math.abs(B - prev) > precision.iterations) {
        prev = B
        B = 2 * Math.atan(Math.pow((1 + e * Math.sin(prev)) / (1 - e * Math.sin(prev)), e / 2) * Math.exp(y)) - Math.PI / 2
    }
    return { B, L, H: projected.H - (options.altitudeOffset || 0) }
}

function calcE2(ellipsoid) {
    const f = 1 / ellipsoid.f
    return 2 * f - f * f
}

function calcEPrime2(ellipsoid) {
    const e2 = calcE2(ellipsoid)
    return e2 / (1 - e2)
}

function calcEta2(ellipsoid, B) {
    return calcEPrime2(ellipsoid) * Math.cos(B) * Math.cos(B)
}

function calcMeridionalArc(B, ellipsoid) {
    const e2 = calcE2(ellipsoid)
    const e4 = e2 * e2
    const e6 = e4 * e2
    const a0 = 1 - e2 / 4 - 3 * e4 / 64 - 5 * e6 / 256
    const a2 = 3 / 8 * (e2 + e4 / 4 + 15 * e6 / 128)
    const a4 = 15 / 256 * (e4 + 3 * e6 / 4)
    const a6 = 35 * e6 / 3072
    return ellipsoid.a * (a0 * B - a2 * Math.sin(2 * B) + a4 * Math.sin(4 * B) - a6 * Math.sin(6 * B))
}

function formatOutput(label, payload) {
    const degB = toDegrees(payload.geodetic.B).toFixed(precision.angle)
    const degL = toDegrees(payload.geodetic.L).toFixed(precision.angle)
    const H = payload.geodetic.H.toFixed(precision.coordinate)
    const line = [
        label,
        degB,
        degL,
        H,
        payload.cartesian.X.toFixed(precision.coordinate),
        payload.cartesian.Y.toFixed(precision.coordinate),
        payload.cartesian.Z.toFixed(precision.coordinate),
        payload.projected.E.toFixed(precision.coordinate),
        payload.projected.N.toFixed(precision.coordinate)
    ].join(',')
    return { label, text: line }
}

function exportCsv() {
    if (!hasOutput.value) return
    const blob = new Blob([convertedText.value], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'seven-parameter-output.csv'
    link.click()
    URL.revokeObjectURL(url)
}

function toggleProcess() {
    showProcess.value = !showProcess.value
}

function copyProcess() {
    if (!processLog.value) return
    navigator.clipboard?.writeText(processLog.value).then(() => {
        notify(t('tools.seven-parameter-transformer.copySuccess'))
    })
}

function logProcess(stageKey, message) {
    const label = t(`tools.seven-parameter-transformer.processLabels.${stageKey}`) || stageKey
    processLog.value += `[${new Date().toISOString()}] ${label}: ${message}\n`
}

function solveParameters() {
    const lines = solverText.value.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
    if (lines.length < 3) {
        notify(t('tools.seven-parameter-transformer.solverNeedsPoints'))
        return
    }
    const src = []
    const tgt = []
    lines.forEach(line => {
        const [left, right] = line.split('=>').map(part => part.trim())
        const srcParts = left.split(/[, \t]+/).map(parseFloat)
        const tgtParts = right.split(/[, \t]+/).map(parseFloat)
        if (srcParts.length >= 3 && tgtParts.length >= 3) {
            src.push({ X: srcParts[0], Y: srcParts[1], Z: srcParts[2] })
            tgt.push({ X: tgtParts[0], Y: tgtParts[1], Z: tgtParts[2] })
        }
    })
    const result = leastSquaresSevenParams(src, tgt)
    if (!result) return
    Object.assign(parameters, result.parameters)
    solverResiduals.value = result.summary
    lastHistory.value = { parameters: { ...result.parameters }, residuals: result.residuals }
    updateStats(result.residuals)
}

function leastSquaresSevenParams(src, tgt) {
    if (src.length !== tgt.length || src.length < 3) return null
    const A = []
    const L = []
    for (let i = 0; i < src.length; i++) {
        const s = src[i]
        const t = tgt[i]
        A.push([1, 0, 0, 0, s.Z, -s.Y, s.X])
        A.push([0, 1, 0, -s.Z, 0, s.X, s.Y])
        A.push([0, 0, 1, s.Y, -s.X, 0, s.Z])
        L.push(t.X - s.X, t.Y - s.Y, t.Z - s.Z)
    }
    const AT = transpose(A)
    const N = multiply(AT, A)
    const U = multiply(AT, L.map(v => [v]))
    const invN = invertMatrix(N)
    const X = multiply(invN, U)
    const params = {
        dX: X[0][0],
        dY: X[1][0],
        dZ: X[2][0],
        rX: radiansToArcseconds(X[3][0]),
        rY: radiansToArcseconds(X[4][0]),
        rZ: radiansToArcseconds(X[5][0]),
        scale: X[6][0] * 1e6
    }
    const residuals = []
    const summary = []
    for (let i = 0; i < src.length; i++) {
        const applied = applySevenParams({
            X: src[i].X,
            Y: src[i].Y,
            Z: src[i].Z
        }, params)
        const vx = tgt[i].X - applied.X
        const vy = tgt[i].Y - applied.Y
        const vz = tgt[i].Z - applied.Z
        const norm = Math.sqrt(vx * vx + vy * vy + vz * vz)
        residuals.push(norm)
        summary.push(`P${i + 1}: ${norm.toFixed(4)} m`)
    }
    return {
        parameters: params,
        residuals,
        summary: summary.join('\n')
    }
}

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))
}

function multiply(a, b) {
    const rowsA = a.length
    const colsA = a[0].length
    const rowsB = b.length
    const colsB = b[0].length
    const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0))
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += a[i][k] * b[k][j]
            }
        }
    }
    return result
}

function invertMatrix(matrix) {
    const n = matrix.length
    const aug = matrix.map((row, i) => [...row, ...identityRow(n, i)])
    for (let i = 0; i < n; i++) {
        let pivot = aug[i][i]
        if (Math.abs(pivot) < 1e-12) {
            for (let j = i + 1; j < n; j++) {
                if (Math.abs(aug[j][i]) > Math.abs(pivot)) {
                    [aug[i], aug[j]] = [aug[j], aug[i]]
                    pivot = aug[i][i]
                    break
                }
            }
        }
        const factor = aug[i][i]
        for (let j = 0; j < 2 * n; j++) {
            aug[i][j] /= factor
        }
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                const ratio = aug[j][i]
                for (let k = 0; k < 2 * n; k++) {
                    aug[j][k] -= ratio * aug[i][k]
                }
            }
        }
    }
    return aug.map(row => row.slice(n))
}

function identityRow(size, index) {
    return Array.from({ length: size }, (_, i) => (i === index ? 1 : 0))
}

function radiansToArcseconds(value) {
    return value * (180 / Math.PI) * 3600
}

function updateStats(residuals) {
    if (!residuals.length) return
    const sumSq = residuals.reduce((acc, val) => acc + val * val, 0)
    stats.rmse = Math.sqrt(sumSq / residuals.length)
    stats.maxResidual = Math.max(...residuals)
    const sigma0 = stats.rmse
    stats.ci = 1.96 * sigma0
}

function applyHistoryParams() {
    if (!lastHistory.value) return
    Object.assign(parameters, lastHistory.value.parameters)
}

function notify(message) {
    logProcess('info', message)
}

function parseAngle(value) {
    if (typeof value !== 'string') return parseFloat(value)
    if (value.includes('°')) {
        const [deg, rest] = value.split('°')
        if (rest.includes('′') && rest.includes('″')) {
            const [min, secPart] = rest.split('′')
            const sec = secPart.replace('″', '')
            return parseFloat(deg) + parseFloat(min) / 60 + parseFloat(sec) / 3600
        }
        return parseFloat(deg)
    }
    return parseFloat(value)
}

function toRadians(deg) {
    return deg * Math.PI / 180
}

function toDegrees(rad) {
    return rad * 180 / Math.PI
}
</script>

<style scoped>
.form-input,
.form-select,
.form-textarea {
    @apply w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100;
}

.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-50;
}

.picker-grid {
    background-color: rgba(59, 130, 246, 0.05);
    background-image: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(180deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}
</style>

