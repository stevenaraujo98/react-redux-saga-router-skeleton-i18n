// import Header from '../components/Header';
import { Route } from 'react-router-dom';
import Home from './Home';

const Start = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="contendero-headers">
                <Route path="/" component={Home} exact />
            </div>
        </>
    );
};

export default Start;
