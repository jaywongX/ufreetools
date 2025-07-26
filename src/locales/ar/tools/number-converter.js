export default {
  name: 'محول الأرقام',
  description: 'تحويل الأرقام بين أنظمة العد المختلفة والتنسيقات',

  input: {
    title: 'إدخال الرقم',
    placeholder: 'أدخل الرقم للتحويل',
    fromBase: 'نظام العد الأصلي',
    toBase: 'نظام العد الهدف',
    customBase: 'نظام عد مخصص'
  },

  bases: {
    binary: 'ثنائي (أساس 2)',
    octal: 'ثماني (أساس 8)',
    decimal: 'عشري (أساس 10)',
    hexadecimal: 'سداسي عشر (أساس 16)',
    base32: 'أساس 32',
    base36: 'أساس 36',
    base58: 'أساس 58',
    base64: 'أساس 64',
    custom: 'نظام عد مخصص'
  },

  options: {
    signed: 'مُوقَّع',
    bitLength: 'طول البت',
    byteOrder: 'ترتيب البايت',
    formatOutput: 'تنسيق المخرجات',
    separator: 'فاصل',
    prefix: 'إضافة بادئة',
    uppercase: 'أحرف كبيرة'
  },

  byteOrders: {
    littleEndian: 'ليتل إنديان',
    bigEndian: 'بيغ إنديان'
  },

  bitLengths: {
    '8': '8 بت',
    '16': '16 بت',
    '32': '32 بت',
    '64': '64 بت',
    custom: 'مخصص'
  },

  output: {
    title: 'نتيجة التحويل',
    binary: 'ثنائي',
    octal: 'ثماني',
    decimal: 'عشري',
    hexadecimal: 'سداسي عشر',
    custom: 'نظام عد مخصص',
    all: 'كل التحويلات'
  },

  actions: {
    convert: 'تحويل',
    clear: 'مسح',
    copy: 'نسخ النتيجة',
    swap: 'تبديل أنظمة العد'
  },

  bitConverters: {
    title: 'محولات البت',
    ieee754: 'أرقام الفاصلة العائمة IEEE 754',
    twosComplement: 'مكمل اثنين',
    bitMask: 'قناع البت',
    bitField: 'مستخرج حقول البت'
  },

  calculators: {
    title: 'حسابات',
    add: 'جمع',
    subtract: 'طرح',
    multiply: 'ضرب',
    divide: 'قسمة',
    modulo: 'باقي القسمة',
    power: 'أس'
  },

  messages: {
    invalidInput: 'رقم غير صالح لنظام العد المحدد',
    outOfRange: 'الرقم خارج نطاق طول البت المحدد',
    copied: 'تم نسخ نتيجة التحويل إلى الحافظة',
    conversionComplete: 'اكتمل التحويل'
  }
};