export default {
  name: 'RSA 암호화 도구',
  description: 'RSA 키 쌍 생성, 데이터 암호화/복호화, 디지털 서명 생성/검증',
  tabs: {
    title: '기능 선택',
    keyGeneration: '키 생성',
    encryptDecrypt: '암호화/복호화',
    signVerify: '서명/검증'
  },
  keyGeneration: {
    title: 'RSA 키 쌍 생성',
    keyLength: '키 길이',
    keySizes: {
      size512: '512비트 (보안 시나리오에는 권장되지 않음)',
      size1024: '1024비트 (기본 보안)',
      size2048: '2048비트 (권장)',
      size4096: '4096비트 (고급 보안)'
    },
    generateButton: '키 쌍 생성',
    generating: '생성 중...',
    publicKey: '공개 키 (Public Key)',
    privateKey: '개인 키 (Private Key)',
    exportPublicKey: '공개 키 내보내기',
    exportPrivateKey: '개인 키 내보내기',
    copy: '복사',
    info: {
      title: 'RSA 키 쌍 이해하기',
      description: 'RSA는 한 쌍의 키를 사용하는 비대칭 암호화 알고리즘입니다:',
      points: {
        0: '공개 키: 누구와도 안전하게 공유할 수 있으며 데이터 암호화 또는 서명 검증에 사용됩니다.',
        1: '개인 키: 안전하게 보관해야 하며 유출되어서는 안 되며 데이터 복호화 또는 서명 생성에 사용됩니다.'
      },
      keyLengthTitle: '키 길이는 보안 수준을 결정합니다:',
      keyLengthPoints: {
        0: '512비트 - 더 이상 안전하지 않으며 테스트용으로만 사용됩니다',
        1: '1024비트 - 약하며 민감한 데이터에는 권장되지 않습니다',
        2: '2048비트 - 현재 권장되는 표준입니다',
        3: '4096비트 - 더 높은 보안을 제공하지만 처리 속도가 느립니다'
      }
    }
  },
  encryptDecrypt: {
    title: '암호화 및 복호화',
    encryptMode: '암호화 모드',
    decryptMode: '복호화 모드',
    encryptDescription: '공개 키를 사용하여 데이터를 암호화하면 해당 개인 키를 가진 사람만 복호화할 수 있습니다.',
    decryptDescription: '개인 키를 사용하여 이전에 공개 키로 암호화된 데이터를 복호화합니다.',
    keyLabel: {
      encrypt: '공개 키 (Public Key)',
      decrypt: '개인 키 (Private Key)'
    },
    dataLabel: {
      encrypt: '암호화할 데이터',
      decrypt: '복호화할 데이터'
    },
    keyPlaceholder: 'RSA 키를 붙여넣으세요',
    dataPlaceholder: {
      encrypt: '암호화할 텍스트를 여기에 입력하세요',
      decrypt: '복호화할 데이터(Base64 형식)를 여기에 입력하세요'
    },
    processButton: {
      encrypt: '데이터 암호화',
      decrypt: '데이터 복호화'
    },
    processing: '처리 중...',
    resultLabel: {
      encrypt: '암호화 결과',
      decrypt: '복호화 결과'
    },
    info: {
      title: 'RSA 암호화 및 복호화 정보',
      description: 'RSA는 다음과 같이 작동하는 비대칭 암호화 알고리즘입니다:',
      points: {
        0: '암호화: 수신자의 공개 키를 사용하여 데이터를 암호화하여 해당 개인 키를 가진 수신자만 복호화할 수 있도록 합니다.',
        1: '복호화: 수신자는 자신의 개인 키를 사용하여 데이터를 복호화합니다.',
        2: 'RSA 암호화에는 데이터 길이 제한이 있어 일반적으로 대용량 파일을 직접 암호화하는 데 적합하지 않습니다.',
        3: '대용량 데이터의 경우 일반적으로 먼저 대칭 암호화(예: AES)로 데이터를 암호화한 다음 RSA로 대칭 키를 암호화합니다.'
      }
    },
    encrypt: '암호화',
    decrypt: '복호화'
  },
  signVerify: {
    title: '서명 및 검증',
    signMode: '서명 모드',
    verifyMode: '검증 모드',
    signDescription: '개인 키를 사용하여 데이터에 서명하여 데이터 출처의 진위성과 무결성을 증명합니다.',
    verifyDescription: '공개 키를 사용하여 서명을 검증하여 데이터가 변조되지 않았으며 예상된 발신자로부터 온 것임을 확인합니다.',
    keyLabel: {
      sign: '개인 키 (Private Key)',
      verify: '공개 키 (Public Key)'
    },
    dataLabel: '데이터',
    hashAlgorithm: '해시 알고리즘',
    hashOptions: {
      sha1: 'SHA-1 (보안 시나리오에는 권장되지 않음)',
      sha256: 'SHA-256 (권장)',
      sha512: 'SHA-512 (고급 보안)',
      md5: 'MD5 (테스트용으로만 사용, 안전하지 않음)'
    },
    signatureLabel: '서명 (Base64 형식)',
    signaturePlaceholder: '서명 데이터를 여기에 입력하세요',
    processButton: {
      sign: '서명 생성',
      verify: '서명 검증'
    },
    processing: '처리 중...',
    signatureResult: '서명 결과 (Base64 형식)',
    verificationSuccess: '서명 검증 성공',
    verificationFailure: '서명 검증 실패',
    verificationSuccessMessage: '데이터가 변조되지 않았으며 예상된 발신자로부터 왔습니다.',
    verificationFailureMessage: '데이터가 변조되었거나 서명이 해당 개인 키로 생성되지 않았을 수 있습니다.',
    info: {
      title: 'RSA 서명 및 검증 정보',
      description: 'RSA 서명은 메시지의 진위성과 무결성을 검증하기 위한 디지털 서명 기술입니다:',
      points: {
        0: '서명 과정: 발신자의 개인 키를 사용하여 메시지의 해시 값을 암호화하여 디지털 서명을 생성합니다.',
        1: '검증 과정: 수신자는 발신자의 공개 키를 사용하여 서명을 복호화하고 메시지의 해시 값과 비교합니다.',
        2: '검증이 성공하면 메시지가 개인 키를 가진 발신자로부터 왔으며 내용이 변조되지 않았음을 나타냅니다.',
        3: '서명은 메시지를 암호화하지 않으며 출처와 무결성 검증에만 사용됩니다. 메시지 내용을 보호하려면 암호화도 필요합니다.'
      }
    },
    sign: '서명',
    verify: '서명 검증',
    signatureValue: '서명 값',
    verificationResult: {
      success: '검증 성공! 서명이 유효하며 데이터가 완전하고 신뢰할 수 있는 출처입니다.',
      failed: '검증 실패! 서명이 유효하지 않으며 데이터가 변조되었거나 출처가 신뢰할 수 없을 수 있습니다.'
    },
    dataPlaceholder: '서명하거나 검증할 데이터를 여기에 입력하세요',
    keyPlaceholder: 'RSA 키를 붙여넣으세요'
  },
  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    keygenError: '키 쌍 생성 중 오류 발생: {error}',
    encryptError: '암호화 실패, 공개 키와 입력 데이터를 확인하세요. RSA 암호화에는 데이터 길이 제한이 있습니다.',
    decryptError: '복호화 실패, 개인 키가 올바른지와 입력 데이터가 유효한 암호화된 텍스트인지 확인하세요.',
    signError: '서명 생성 실패, 개인 키와 입력 데이터를 확인하세요.',
    verifyError: '검증 실패, 키와 입력 데이터를 확인하세요.',
    processingError: '작업 실패. 키와 입력 데이터를 확인하세요.'
  }
}