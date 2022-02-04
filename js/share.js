const url = 'https://savle.net/';

function setShare(){

  var newUrl = document.location.href.split("-").reverse()[0];
  var param = newUrl.substr(0,1);

  const shareTitle = mbtiList[param].name ;
  const shareDes = mbtiList[param].desc; /* data.js name MBTI로 변경 필요 */
  const shareImage = url + 'MBTI/img/mbti_main/mt-' + param + '.png' ; /* 이미지 변경 필요 */
  const shareURL = url + 'MBTI/page/result-' + param + '.html' ;


Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result", 
        webUrl : shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result",
      },
    },

      buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result", 
          webUrl : shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result",
        },
      },
    ]
  });
}

function setShare2(){

  var newUrl = document.location.href.split("-").reverse()[0];
  var param = newUrl.substr(0,2);

  const shareTitle = mbtiList[param].name ;
  const shareDes = mbtiList[param].desc; /* data.js name MBTI로 변경 필요 */
  const shareImage = url + 'MBTI/img/mbti_main/mt-' + param + '.png' ; /* 이미지 변경 필요 */
  const shareURL = url + 'MBTI/page/result-' + param + '.html' ;


Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result", 
        webUrl : shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result",
      },
    },

      buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result", 
          webUrl : shareURL + "?utm_source=kakaotalk&utm_medium=dm&utm_campaign=sns&utm_content=share_result",
        },
      },
    ]
  });
}

function shareTwitter() {
  var sendText = "저축 성향 테스트";
  var sendUrl = encodeURIComponent(window.location.href) + "?utm_source=twitter&utm_medium=social&utm_campaign=sns&utm_content=share_result";
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}



function shareFacebook() {
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "?utm_source=facebook&utm_medium=social&utm_campaign=sns&utm_content=share_result");
}

function copyLink(){

  let currentUrl = window.document.location.href;

  let t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = currentUrl + "?utm_source=share_button&utm_medium=link&utm_campaign=sns&utm_content=share_result";
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);

  alert('복사 완료! 공유해주셔서 감사합니다!');

}


function setShare0(){

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '저축 성향',
      description: '저축 성향 테스트',
      imageUrl:
        'https://savle.net/MBTI/img/savle_main.png',
      link: {
        mobileWebUrl: 'https://savle.net/MBTI/',
        webUrl: 'https://savle.net/MBTI/'
      },
    },
  
  
  });
  }

  function subscribe(){
    var email = $("#email").val();
    if(!email){
        alert("이메일 주소를 입력하세요.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "https://api.savle.net/v1/pre-marketing/register-email",
        dataType: "json",
        /* etc도 있음, 추후에 사용할 경우에 해당 변수 추가 */
        data: { "email": email, "channel": "mbti" },
        cache: false,
        async: true,
        success: function(data) {
            // result = data;
            // console.log(data.result);
            if(data.result=="SUCCESS"){
                alert("출시 소식 신청이 되었습니다.");
            }else{
                alert("Oops, 정상적으로 처리가 안되었습니다.");
            }
        },
    });
}
