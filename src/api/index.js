import Chance from "chance";

const chance = Chance();

const fakeData = () => {
    return chance.name({ middle : true });
}

export default fakeData;