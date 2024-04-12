const LIQUID = {
    alcohol: 'alcohol',
};

const SIGHT = {
    alcohol: 'alcohol',
};

class HumanKind{
    constructor(ovum, sperm){
        // 胎児

        this.emotions = {
            fear: 0,
        };
    }

    drink(liquid){
        switch(liquid.type){
            case LIQUID.alcohol:
                this.emotions.fear++;
                break;

            default:
                break;
        }
    }

    watch(sight){
        switch(sight.type){
            case horror:
                this.emotions.fear++;
                break;

            default:
                break;
        }
    }
}