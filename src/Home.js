import React from 'react';
import './Home.css';
import NavBar from './component/NavBar';
import Article from './component/Article';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="content">
                    <Article
                        image='https://akcdn.detik.net.id/community/media/visual/2018/02/04/8b285991-43d4-479e-bde6-51033ee7a18e_43.jpeg?w=700&q=90'
                        title='Hacker Diduga Jebol Jutaan Data Penduduk di KPU'
                        desc='Hacker dilaporkan membobol data 2,3 juta pemilih di Indonesia dari...'
                    />
                    <Article
                        image='https://akcdn.detik.net.id/community/media/visual/2018/01/31/b8f1ec85-fccd-4d76-beba-27ca7b08cadc_169.jpeg?w=700&q=90'
                        title='Data Pribadi Marak Dijual di Dark Web'
                        desc='Keamanan data pribadi menjadi isu yang sangat penting di era sekarang dan acap kali...'
                    />
                    <Article
                        image='https://akcdn.detik.net.id/community/media/visual/2020/05/22/448e654f-dd2d-4fef-8132-a3ffdce1e75b.png?w=700&q=90'
                        title='Microsoft Bikin Komputer Super untuk Lawan Corona'
                        desc='Microsoft membangun superkomputer yang sangat besar...'
                    />
                </div>
            </div>
        )
    }
}

export default Home