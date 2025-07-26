export default {
  name: '인스타그램 포스트 생성기',
  description: '실제와 같은 인스타그램 포스트 시뮬레이션 생성, 사용자 정의 콘텐츠, 배경 및 상호작용 데이터 지원',

  // 디자인 옵션
  designOptions: '디자인 옵션',

  // 사용자 프로필
  userProfile: {
    title: '사용자 프로필 설정',
    username: '사용자 이름',
    location: '위치',
    postedTime: '게시 날짜 및 시간',
    postDate: '상세 날짜',
    avatar: '프로필 사진',
    uploadAvatar: '프로필 사진 업로드',
    removeAvatar: '제거',
    verifiedAccount: '계정 상태',
    isVerified: '인증된 계정'
  },

  // 콘텐츠 유형
  contentType: '콘텐츠 유형',

  contentTypes: {
    text: '텍스트 전용',
    image: '이미지 전용',
    mixed: '텍스트와 이미지'
  },

  // 텍스트 콘텐츠
  textContent: '텍스트 콘텐츠',

  postText: '포스트 텍스트',
  addHashtag: '해시태그 추가',
  mentionUser: '사용자 멘션',
  insertEmoji: '이모지',
  commonEmojis: '자주 사용하는 이모지',
  recommendedHashtags: '추천 해시태그',

  // 텍스트 서식
  fontFamily: '글꼴',

  fontSize: '글꼴 크기',
  textAlign: '텍스트 정렬',
  textColor: '텍스트 색상',

  // 배경 이미지
  backgroundImage: '배경 이미지',

  uploadImage: '이미지 업로드',
  dragAndDrop: '또는 파일 드래그 앤 드롭',
  imageFormats: 'PNG, JPG, GIF 형식, 최대 2MB',

  // 배경
  background: '배경',

  backgroundColor: '배경 색상',
  backgroundType: '배경 유형',

  backgroundTypes: {
    solid: '단색',
    gradient: '그라데이션',
    pattern: '패턴'
  },

  // 그라데이션 옵션
  gradientStartColor: '시작 색상',

  gradientEndColor: '종료 색상',
  gradientDirection: '방향',

  gradientDirections: {
    horizontal: '수평',
    vertical: '수직',
    diagonal: '대각선',
    diagonalReverse: '역대각선'
  },

  // 패턴 옵션
  patternType: '패턴 유형',

  // 포스트 형식
  postFormat: '포스트 형식',

  formats: {
    square: '정사각형',
    portrait: '세로',
    landscape: '가로'
  },

  // 상호작용
  engagement: {
    title: '상호작용 시뮬레이션',
    likeCount: '좋아요 수',
    commentCount: '댓글 수',
    viewCount: '조회수',
    isLiked: '조회자가 좋아요',
    isSaved: '조회자가 저장',
    hasStory: '스토리 있음',
    showComments: '댓글 표시',
    isTagged: '태그됨',
    isSponsored: '스폰서 콘텐츠'
  },

  // 댓글
  comments: {
    title: '댓글 시뮬레이션',
    addComment: '댓글 추가',
    delete: '삭제',
    addForRealism: '실제감을 위해 시뮬레이션 댓글 추가',
    username: '사용자 이름',
    text: '댓글 내용'
  },

  // 프롬프트
  prompts: {
    enterHashtag: '해시태그 입력(# 제외)',
    enterUsername: '멘션할 사용자 이름 입력',
    enterComment: '댓글 내용 입력',
    defaultComment: '정말 멋져요!',
    enterCommentUsername: '댓글 사용자 이름 입력',
    justNow: '방금'
  },

  // 액션 버튼
  resetDesign: '디자인 초기화',

  // 미리보기 및 내보내기
  preview: '미리보기',

  export: '내보내기',
  downloadAsPNG: 'PNG로 다운로드',
  downloadAsJPG: 'JPG로 다운로드',
  copyToClipboard: '클립보드에 복사',
  copied: '복사 완료!',
  generating: '이미지 생성 중...'
};