export default {
  name: 'Git 충돌 해결 시뮬레이터',
  description: 'Git 병합 충돌 시나리오를 시뮬레이션하고 코드 충돌 해결 연습',
  title: 'Git 충돌 해결 시뮬레이터',
  intro: '이 도구는 Git 병합 충돌을 이해하고 해결하는 방법을 연습하는 데 도움이 됩니다. 충돌 내용을 입력하거나 예제를 사용한 후 수동으로 충돌을 해결하세요.',

  buttons: {
    generateExample: '예제 충돌 생성',
    resolveOurs: '내 변경사항 사용 (HEAD)',
    resolveTheirs: '그들의 변경사항 사용',
    validate: '해결안 검증',
    reset: '초기화',
    useOurs: '내 것 사용',
    useTheirs: '그들의 것 사용',
    useBoth: '둘 다 병합'
  },

  conflictArea: {
    label: '충돌 내용',
    hasConflict: '⚠️ 해결되지 않은 충돌 존재',
    noConflict: '✓ 충돌 없음'
  },

  analysis: {
    title: '충돌 분석',
    conflict: '충돌 #{number}',
    ours: '내 변경사항 (HEAD)',
    theirs: '그들의 변경사항'
  },

  tutorial: {
    title: 'Git 충돌 해결 방법',
    intro: 'Git 충돌은 일반적으로 병합 또는 리베이스 작업 중에 발생하며, 두 브랜치가 동일한 파일의 동일한 부분을 수정할 때 발생합니다.',
    markerExplanation: '충돌 마커는 일반적으로 다음과 같이 표시됩니다:',
    markerExample: `<<<<<<< HEAD
당신의 변경사항 (현재 브랜치)
=======
그들의 변경사항 (병합 중인 브랜치)
>>>>>>> 브랜치 이름`,
    steps: {
      title: '충돌 해결 기본 단계:',
      step1: '모든 충돌 마커 찾기 (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> 브랜치명</code>)',
      step2: '어떤 코드를 유지할지 결정 (당신의 것, 그들의 것, 또는 둘의 조합)',
      step3: '충돌 마커를 삭제하고 유지하기로 결정한 코드만 남기기',
      step4: '다음 충돌로 이동하여 모든 충돌이 해결될 때까지 계속'
    },
    commands: {
      title: '자주 사용하는 Git 명령어:',
      status: '<code>git status</code> - 충돌이 있는 파일 확인',
      diff: '<code>git diff</code> - 충돌 내용 상세 확인',
      abort: '<code>git merge --abort</code> - 병합 취소 및 병합 전 상태로 복귀',
      add: '<code>git add &lt;파일&gt;</code> - 충돌 해결된 파일을 스테이징',
      commit: '<code>git commit</code> - 병합 완료'
    }
  },

  messages: {
    generated: "예제 충돌 내용이 생성되었습니다",
    resolvedOurs: "모든 '내 변경사항'을 사용하여 충돌 해결됨",
    resolvedTheirs: "모든 '그들의 변경사항'을 사용하여 충돌 해결됨",
    resolvedSingle: "충돌 #{number} 해결됨",
    allResolved: "✅ 모든 충돌이 성공적으로 해결되었습니다!",
    stillHasConflicts: "⚠️ 아직 해결되지 않은 충돌이 있습니다. 모든 마커를 확인하고 해결하세요"
  }
};