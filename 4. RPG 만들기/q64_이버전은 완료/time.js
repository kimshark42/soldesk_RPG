    let minutes = 0;  /* let -> 템플릿 리터럴이라고 함 ``(백틱) 으로 감싸진 문자열 안에서 변수나 표현식을 쉽게 삽입할수 있는 문법 */
    let hours = 0;

    function updateClockDisplay(){
        const clock = document.getElementById("game_clock");

        // 12시간 형식으로 변환
        let displayHours = hours % 12; // -> 물어볼것 hours 코드는 내장코드인지, % 는 왜 붙이는건지
        if (displayHours === 0)displayHours = 12; // 같다 는 == 두번만 붙이면 됬는데 세번 붙이는건 뭔지

        let period = hours < 12 ? 'AM' : 'PM';  // ? <- if 문 줄인것, 삼 연산자

        let h = hours.toString().padStart(2, '0');
        let m = minutes.toString().padStart(2,'0');

        txGameClock(`\n[턴 진행] ${h}:${m} ${period}`)
    }

    function advanceTurn(){
        minutes += 15;
        if (minutes >= 60){
            hours += 1;
            minutes -= 60;
        }
        updateClockDisplay();
    }

    // 처음 표시
    // updateClockDisplay();

    //예시: 버튼을 누르면 advanceTurn 이 호출되도록
    // dw("nextTurnButen").addEventListener("click",advanxeTurn);