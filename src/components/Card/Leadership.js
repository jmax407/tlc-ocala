import React from 'react';
import './card.css'
import Card from './Card';

import pastorJoe from '../../assets/images/pastor-joe-maxwell-crop.jpg';
import bishopHenson from '../../assets/images/bishop-henson-lady-van.jpg';

const Pastors = [
    {
      id: 'p1',
      name: 'Bishop Barry Henson',
      image: bishopHenson,
      description: 'Bishop Henson & Lady Van',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem sit incidunt, porro dolores alias sed eveniet delectus? Blanditiis repudiandae consectetur sapiente maiores similique incidunt et repellendus praesentium aliquam neque.',
    },
    {
      id: 'p2',
      name: 'Pastor Joe Maxwell',
      image: pastorJoe,
      description: 'Pastor Joe Maxwell',
      text: 'Joe Maxwell grew up in Lake Butler Florida. He has a B.A. in Business Administration and an A.S in Biblical Studies and is also a certified trainer in Evangelism Explosion. He has taken distance learning classes from Liberty University and Birmingham Theological Seminary. He has been a leader in The Life Center Church for over 40 years, serving on various Ministries. Paster Joe is married to Joyce Brown Maxwell. Lady Joyce is from Wrens, GA. They have 6 children, 14 grandchildren, and 3 great-grands. In June of 2022, after the passing of the late Bishop Barry Henson, Pastor Joe assumed the interim pastoral role of The Life Center of Ocala. He will be ordained and installed as the official pastor of the church in 2023.',
    },
  ];

const Leadership = () => {
    return (
        <section id="leadership" className='padtopbottom100 bg-white'>
        <div className="container">
            <div className="row pb-5">
                <div className="col-lg-8">
                    <div className="row">
                    {
                    Pastors.map((pastor) => {
                        return (
                            <div className="col-lg-6" key={pastor.id}>
                                <Card pastor={pastor}/>
                                
                            </div>
                        )
                    })
                }
                    </div>
                </div>
                <div className="col-lg-4">
                    <h2 className='section-title'>Our Leadership</h2>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Leadership;