import React from 'react';
import Articles from '../articles/Articles';
import PubModal from '../modals/PubModal';
import Search from '../Search/Search';


const HomePage = () => {
   // const [isModalOpen, setIsModalOpen] = useState(true);

    /*useEffect(()=> {
        setTimeout(()=>{
            setIsModalOpen(true)
        }, 3000)
    })*/
    return (
        <div>
            <Search></Search>
            <Articles />
            <PubModal />
        </div>
    );
};



export default HomePage;