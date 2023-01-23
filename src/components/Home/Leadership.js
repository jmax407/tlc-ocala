import React from 'react';
import '../Card/card.css'
import Card from '../Card/Card';

import pastorJoe from '../../assets/images/pastor-joe-maxwell-crop.jpg';
import bishopHenson from '../../assets/images/bishop-henson-lady-van.jpg';

const Pastors = [
    {
        id: 'p1',
        name: 'Pastor Joe Maxwell',
        image: pastorJoe,
        description: 'Pastor Joe Maxwell',
        text: `Pastor Joe as he is known at the Life Center Church has served in various ministries in the past 40 plus years, parking, choir, teaching, single, couples, deacon, prison, youth, and outreach ministries.  While living in Lake Butler, Joe and his childhood friend Abraham Perry started a community bible study, because most of the Black churches did not have a mid-week bible study. Minister Joe also started a community choir. The choir served as a springboard to a lot of young people giving their lives to the Lord.  Joe and his wife Joyce led a bi-monthly bible study in Lakeland prior to the pandemic.
  
        Joe Maxwell grew up in Lake Butler Florida and is a member of The Life Center Church in Eatonville Florida where he currently serves in the Men’s Fellowship, Marriage Enrichment Fellowship and Pastoral Care Ministries.
        
        Pastor Joe is married to Joyce Brown Maxwell, they have six children: Valeria, Joseph III, JeJuan, Vonchell, Julius and Keisha. They also have ten grandchildren and three great-grands.
        
        Joe retired from Walgreen Distribution Center as a Process Improvement Project Manager. He also was a minority college recruiter, visiting historical Black colleges and other colleges and universities for careers in the Supply Chain and Transportation field and retail stores for the Walgreen Company. Joe helped to create a training program for senior high school students and people with disabilities to work at the Walgreen’s Distribution Centers and Retail stores. He currently works for as a Retail Buyer for the Valencia College Bookstores, and he serves on several of Valencia’s Student Committees.
        
        Pastor Joe has a B.A. in Business Administration and an A.S in Biblical Studies. He is also a certified trainer in Evangelism Explosion. He has taken distance learning classes from Liberty University and Birmingham Theological Seminary.
        
        Minister Joe came to salvation after taking a Humanities Class at Santa Fe Community College. The class was called “The Introduction to The New Testament.”  It was during the study of the book of Romans when the teacher (Dr. Tolson) said salvation is the result of a person being justified by faith and not works. After questioning the professor about this statement, he realized he wasn’t saved because he was trusting in all of the good works he was performing at church.  He later called a pastor in the community to come to his mother’s house to explain salvation.  Joe gave his life to the Lord in 1979 in his mother’s living room.
        
        Pastor Joe Maxwell is the senior pastor of The Life Center Church, Ocala, FL and he gave his first officially message as pastor on Sunday, July 24, 2022.`,
      },
    {
      id: 'p2',
      name: 'Bishop Barry Henson',
      image: bishopHenson,
      description: 'Bishop Henson & Lady Van',
      text: `Barry G. Henson, Jurisdictional Bishop, is the Senior Pastor of The Life Center Church of Ocala, FL and has served there since 2002.  Prior to this time, he was assigned to pastoral service as the Executive Pastor for the headquarter church in Eatonville, FL for 11 yrs.

      Bishop Henson has served The Life Center Church in various leadership capacities since becoming a member in 1986. He has been instrumental in the ongoing development of The Life Center Church ministries, administration, and facilities. He served as coordinator for the planning, development, and construction of the 45,000 square foot multi-purpose and sanctuary facilities in Eatonville, FL.
      
      Bishop Henson came to this role following extensive executive experience in the public, military, and private sectors. He has also lent his time and expertise to numerous community and service organizations.
      
      Bishop Henson holds a Bachelor of Science Degree in Business Administration from Florida Southern College, Lakeland, Florida. He has received additional ministry leadership training through The Christian Management Association, The National Association of Church Business Administrators, and The Joint College of African American Pentecostal Bishops.
      
      He is married to his wife of 47 yrs., Evangeline and they reside in Ocala, Florida and they have one daughter, Felicia Fountain, known as “Lisa.”`,
    }
  ];

const Leadership = () => {
    return (
        <section id="leadership" className='leadership-container'>
        <div className="container">
            <div className="row">
                <h2 className='section-title text-center pb-5'>Our Leadership</h2>
            </div>
            <div className="row pb-5 d-flex justify-content-center">
                <div className="col-lg-10">
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
            </div>
        </div>
    </section>

    )
}

export default Leadership;