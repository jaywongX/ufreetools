export default {
  name: 'SM2 암호화 도구',
  description: 'SM2 암호 알고리즘을 사용하여 키 쌍 생성, 데이터 암호화/복호화 및 디지털 서명 생성/검증',
  tabs: {
    title: '기능 선택',
    keyGeneration: '키 생성',
    encryptDecrypt: '암호화/복호화',
    signVerify: '서명/검증'
  },
  keyGeneration: {
    title: 'SM2 키 쌍 생성',
    generateButton: '키 쌍 생성',
    generating: '생성 중...',
    publicKey: '공개 키',
    privateKey: '개인 키',
    exportPublicKey: '공개 키 내보내기',
    exportPrivateKey: '개인 키 내보내기',
    copy: '복사',
    info: {
      title: 'SM2 키 쌍 이해',
      description: 'SM2는 중국 국가 암호 관리국이 발표한 타원 곡선 공개 키 암호 알고리즘으로, 비대칭 암호 알고리즘입니다:',
      points: [
        '공개 키: 다른 사람과 공유할 수 있으며, 데이터 암호화 또는 서명 검증에 사용됩니다',
        '개인 키: 안전하게 보관해야 하며, 누출되어서는 안 되고, 데이터 복호화 또는 서명 생성에 사용됩니다'
      ],
      features: 'SM2 알고리즘 특징:',
      featuresList: [
        '256비트 타원 곡선 기반으로, 보안성은 RSA 3072비트와 동등합니다',
        '실행 속도가 빠르고 키 길이가 짧습니다',
        '국가 암호 표준(GB/T 32918 시리즈)으로, 중국 내 상용 암호 시나리오에 적합합니다',
        '암호화, 서명, 키 교환 기능이 통합되어 있습니다'
      ],
      securityTip: '보안 팁: 개인 키는 절대 다른 사람에게 누출되어서는 안 됩니다. 키 쌍을 안전하게 보관하세요.'
    }
  },
  encryptDecrypt: {
    title: '작업 유형',
    encrypt: '암호화',
    decrypt: '복호화',
    keyLabel: {
      encrypt: '공개 키',
      decrypt: '개인 키'
    },
    dataLabel: {
      encrypt: '암호화할 데이터',
      decrypt: '복호화할 데이터'
    },
    keyPlaceholder: 'SM2 키를 붙여넣으세요',
    dataPlaceholder: {
      encrypt: '암호화할 텍스트 입력',
      decrypt: '복호화할 암호문 입력'
    },
    processButton: {
      encrypt: '암호화',
      decrypt: '복호화'
    },
    processing: '처리 중...',
    resultLabel: {
      encrypt: '암호화 결과',
      decrypt: '복호화 결과'
    },
    info: {
      title: 'SM2 암호화/복호화 설명',
      usage: 'SM2 암호화/복호화 사용 방법:',
      points: [
        '암호화: 수신자의 공개 키로 암호화하며, 해당 개인 키를 가진 사람만 복호화할 수 있습니다',
        '복호화: 사용자의 개인 키로 공개 키로 암호화된 데이터를 복호화합니다'
      ],
      limitations: '사용 제한:',
      limitationsList: [
        'SM2 알고리즘은 평문 길이에 제한이 있으며, 짧은 메시지, 키 또는 민감 데이터 암호화에 적합합니다',
        '긴 텍스트 암호화 시 먼저 대칭 암호화(예: SM4)를 사용한 후 SM2로 대칭 키를 암호화하는 것이 좋습니다'
      ],
      note: '주의: SM2로 암호화된 데이터 형식은 RSA와 호환되지 않습니다. 수신자가 SM2 알고리즘을 지원하는지 확인하세요.'
    }
  },
  signVerify: {
    title: '작업 유형',
    sign: '서명',
    verify: '검증',
    keyLabel: {
      sign: '개인 키',
      verify: '공개 키'
    },
    dataLabel: '{operation}할 데이터',
    signatureLabel: '서명 값',
    signatureValue: '생성된 서명',
    keyPlaceholder: 'SM2 키를 붙여넣으세요',
    dataPlaceholder: '원본 데이터 텍스트 입력',
    signaturePlaceholder: '검증할 서명 값 입력',
    processButton: {
      sign: '서명 생성',
      verify: '서명 검증'
    },
    processing: '처리 중...',
    verificationSuccess: '서명 검증 성공! 데이터가 완전하고 변경되지 않았습니다.',
    verificationFailed: '서명 검증 실패! 데이터가 변경되었거나 서명이 올바르지 않을 수 있습니다.',
    info: {
      title: 'SM2 서명/검증 설명',
      mainUses: 'SM2 디지털 서명 주요 용도:',
      usesList: [
        '데이터 무결성: 데이터가 전송 과정에서 변경되지 않았음을 보장합니다',
        '신원 인증: 데이터가 주장된 발신자로부터 온 것임을 증명합니다',
        '부인 방지: 발신자가 메시지를 보냈다는 사실을 부인할 수 없습니다'
      ],
      usage: '사용 방법:',
      usageList: [
        '서명: 사용자의 개인 키로 데이터에 서명을 생성합니다',
        '검증: 발신자의 공개 키로 서명의 진위를 검증합니다'
      ],
      note: '주의: SM2 서명은 국가 암호 표준 알고리즘을 사용하며, 국제적으로 통용되는 서명 알고리즘과 호환되지 않습니다. 수신자가 SM2 알고리즘을 지원해야 합니다.'
    }
  },
  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해 주세요',
    keygenError: '키 쌍 생성 중 오류 발생: {error}',
    processError: '작업 실패. 키와 입력 데이터를 확인하세요.',
    emptyKey: '키를 입력하세요',
    emptyData: '처리할 데이터를 입력하세요'
  }
}