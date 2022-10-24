import { useState } from "react";
import './Tabs.css'
import Sales_data from "./Sales/Sales_data";
import { Sales_products } from "./Sales/Sales_products";
import { Summer_products } from "./Summer/Summer_products";
import { Winter_products } from "./Winter/Winter_products";


function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Sales
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Summer
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Winter
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            
            <div className='Sales'>
            {Sales_data.map(data => (
              <Sales_products 
              key={data.id}
              name={data.name}
                        price={data.price}
                        rating={data.rating}
              />

            ))}
          </div>

          </div>
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
           
            <div className='Sales'>
            {Sales_data.map(data => (
              <Summer_products 
              key={data.id}
              name={data.name}
                        price={data.price}
                        rating={data.rating}
              />

            ))}
          </div>
          </div>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            
            <div className='Sales'>
            {Sales_data.map(data => (
              <Winter_products 
              key={data.id}
              name={data.name}
                        price={data.price}
                        rating={data.rating}
              />

            ))}
            </div>
            
          </div>
          <button>Explore More</button>
        </div>
      
    );
  }
  
  export default Tabs;