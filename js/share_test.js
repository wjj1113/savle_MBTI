
function setShare(){

Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: '저축 성향',
    description: '저축 성향 테스트',
    imageUrl:
      'https://savle.net/MBTI/img/savle_main.png',
    link: {
      mobileWebUrl: 'https://savle.net/MBTI/',
      androidExecutionParams: 'test',
    },
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://savle.net/MBTI/',
      },
    },
  ]
});
}