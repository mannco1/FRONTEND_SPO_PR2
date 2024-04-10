import React from 'react';
import Headerx from './companents/Header';
import  Search  from './companents/Search';
import VacShow from './companents/VacShow';

const Home = () => {
    return (
        <div>
            <Headerx/>
            <Search/>
            <VacShow/>
        </div>
    );
};

export default Home;