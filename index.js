import React from 'react';
import delivery from './delivery.avif';
import inactivedelivery from './inactive.webp';
import dining from './diningout.jpg';
import inactivedining from './inactivedining.jpg';
import nightlife from './nightlife.jpg';
import inactivenightlife from './inactivenightlife.webp';
import './tabOptions.css';

const tabs=[
    {
      id:1,
      name:"Delivery",
      active_img:delivery,
      backdrop:"FCEEC0",
      inactive_img: inactivedelivery,
    },
    {
      id:2,
      name:"Dining Out",
      active_img:dining,
      backdrop:"FCEEC0",
      inactive_img: inactivedining,
    },
    {
      id:3,
      name:"Nightlife",
      active_img:nightlife,
      backdrop:"FCEEC0",
      inactive_img: inactivenightlife,
    },
];

const TabOptions = ({activeTab, setActiveTab})=> {
    return (
     <div className='tabOptions'>
        <div className='max-width options-wrapper'>
            {tabs.map((tab)=>{
                return (
                    <div onClick={()=>setActiveTab(tab.name)}
                    className={`tab-item absolute-center cur-po ${activeTab===tab.name && "active-tab"}`}
                    >
                        <div className='tab-image-container absolute-center' style={{backgroundColor:`${activeTab===tab.name?tab.backdrop:""}`}}>
                           <img className='tab-image' alt={tab.name} src={activeTab===tab.name?tab.active_img:tab.inactive_img}/>
                        </div>
                      <div className='tab-name'>
                        {tab.name}
                      </div>
                    </div>
                )
            })}
        </div> 
     </div>
    );
};

export default TabOptions;