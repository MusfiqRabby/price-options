import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  

     const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Locker room access",
              "Basic gym equipment usage"
            ],
            "price": "29.99"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to all Basic Membership features",
              "Group fitness classes included",
              "Access to sauna and steam room",
              "Discounts on personal training sessions",
              "Access to indoor track",
              "Access to functional training area"
            ],
            "price": "49.99"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to all Standard Membership features",
              "Unlimited tanning sessions",
              "Access to swimming pool",
              "Complimentary towel service",
              "Access to massage chairs",
              "Free smoothie bar access",
              "Priority booking for classes and facilities"
            ],
            "price": "79.99"
          }
        ];
 
    return (
        <div>
    <h2 className='text-2xl'>Best Prices in the town</h2>
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }

        </div>
    );
};

export default PriceOptions;