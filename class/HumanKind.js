const 飲み物 = {
  アルコール: 'alcohol',
};

class ヒト{
  constructor(){
    this.感情 = {
      恐れ: 0,
      喜び: 0,
    };
    this.思考容量 = 100;
  }

  飲む(飲料){
    switch(飲料.type){
      case 飲み物.アルコール:
        this.感情.恐れ++;
        break;

      default:
        break;
    }
  }

  話す(){
    
  }
}