import Beverage from '@/models/Beverage/Beverage';

// get all beverage
const getBeverage = async () => {
  const beverage = await Beverage.findOne();

  return beverage;
};

export { getBeverage };
