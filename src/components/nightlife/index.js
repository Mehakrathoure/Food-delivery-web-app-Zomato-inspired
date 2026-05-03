import React from 'react'
import "./nightlife.css";
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import { nightlife } from '../../data/nightlife';

const nightFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-thin fa-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className='fi fi-rr-angle-down absolute-center'></i>,
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
  },
  {
    id: 4,
    title: "Rating: 4.0+",
    
  },
  {
    id: 5,
    title: "Pubs & Bars",
  },

];

const collectionList = [
  {
    id: 1,
    title: "Insta-worthy spots",
    cover:
      "	https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png",
    places: "78 places",
  },
  {
    id: 2,
    title: "New in town",
    cover:
      "	https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727170993.png",
    places: "9 places",
  },
  {
    id: 3,
    title: "Omakase bars",
    cover:
      "	https://b.zmtcdn.com/data/collections/29a1053b9dc17770c25e849df32b7a8f_1752236513.png",
    places: "10 places", 
  },
  {
    id: 4,
    title: "Secret speakeasy bars",
    cover:
      "	https://b.zmtcdn.com/data/collections/b2875b8fc68fe8a39633259c0db491c7_1741170543.png",
    places: "25 places",
  },
  {
    id: 5,
    title: "Insta-worthy spots",
    cover:
      "	https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png",
    places: "78 places",
  },
  {
    id: 6,
    title: "Insta-worthy spots",
    cover:
      "	https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png",
    places: "78 places",
  },
];

const nightList=nightlife;

const nightLife=()=> {
    return (
        <div>
           <Collection list={collectionList}/>
           <div className='max-width'>
            <Filters filterList={nightFilters}/>
           </div>
           <ExploreSection list={nightList} collectionName='Nightlife restaurants in Noida'/>
        </div>
    );
    
};
export default nightLife;