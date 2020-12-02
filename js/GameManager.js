class GameManager {
    constructor(_limit) {
        this.limit = _limit;
        this.current = 0;
        this.quizs = [];
    }

    checkAnswer(ans){
        if(ans === this.quizs[this.current].correct){
            return true;
        }else {
            return false;
        }
    } //Kiểm tra câu trả lời đúng hay sai

    chooseAnswer(ans){
        if(this.checkAnswer(ans)){
            alert("Ban da tra loi dung");
        }else {
            alert("Ban da tra loi sai");
        }
    } // Chọn câu trả lời

    nextQuiz(){
        if(this.current < this.limit-1){
            this.current++;
        }else {
            alert("Bạn đã đến câu hỏi cuối")
            this.current = 0;
        }
    } // Chuyển câu hỏi

    //Kết thúc trò chơi
    endGame(){
        alert("Ban da tra loi sai, Vui long choi lai tu dau");
        this.nextGame();
    }

    nextGame(){
        this.current = 0;
    } // Chơi lại từ đầu

    //CRUD Quiz trong game

    //Add quiz vào trong game;
    addQuiz(quiz){
        this.quizs.push(quiz);
    }

    //Xóa quiz khỏi game
    deleteQuiz(index){
        this.quizs.splice(index,1);
    }

}
