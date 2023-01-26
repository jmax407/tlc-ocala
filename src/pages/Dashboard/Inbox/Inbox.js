import React from 'react';

import './Inbox.css'
import InboxList from './InboxList';


const DUMMY_INBOX = [{
  "id": 1,
  "sender_name": "Francklyn Tunnock",
  "email": "ftunnock0@oakley.com",
  "message": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "date": "07.04.2022",
  "time": "9:29 PM",
  "unread": true
}, {
  "id": 2,
  "sender_name": "Kennett Lathwell",
  "email": "klathwell1@drupal.org",
  "message": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "date": "03.10.2022",
  "time": "2:37 AM",
  "unread": true
}, {
  "id": 3,
  "sender_name": "Ashlie Mullan",
  "email": "amullan2@alexa.com",
  "message": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "date": "24.04.2022",
  "time": "5:13 PM",
  "unread": true
}, {
  "id": 4,
  "sender_name": "Sandi Winsley",
  "email": "swinsley3@netscape.com",
  "message": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "date": "20.12.2022",
  "time": "8:06 AM",
  "unread": true
}, {
  "id": 5,
  "sender_name": "Sianna Moggach",
  "email": "smoggach4@vinaora.com",
  "message": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "11.12.2022",
  "time": "11:02 PM",
  "unread": true
}, {
  "id": 6,
  "sender_name": "Dino Bouda",
  "email": "dbouda5@amazon.de",
  "message": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "02.07.2022",
  "time": "11:16 PM",
  "unread": true
}, {
  "id": 7,
  "sender_name": "Noble Jerdein",
  "email": "njerdein6@jugem.jp",
  "message": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "date": "27.07.2022",
  "time": "9:30 PM",
  "unread": true
}, {
  "id": 8,
  "sender_name": "Hildy Earnshaw",
  "email": "hearnshaw7@usnews.com",
  "message": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "date": "04.07.2022",
  "time": "1:55 PM",
  "unread": true
}, {
  "id": 9,
  "sender_name": "Pam Forkan",
  "email": "pforkan8@youtube.com",
  "message": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "date": "06.11.2022",
  "time": "10:36 AM",
  "unread": true
}, {
  "id": 10,
  "sender_name": "Artemas Danes",
  "email": "adanes9@icio.us",
  "message": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "date": "23.02.2022",
  "time": "11:53 PM",
  "unread": true
}, {
  "id": 11,
  "sender_name": "Jayme Simioni",
  "email": "jsimionia@pcworld.com",
  "message": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "26.03.2022",
  "time": "10:37 PM",
  "unread": true
}, {
  "id": 12,
  "sender_name": "Theo Palmer",
  "email": "tpalmerb@intel.com",
  "message": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "date": "21.05.2022",
  "time": "5:30 PM",
  "unread": true
}, {
  "id": 13,
  "sender_name": "Mary Scoates",
  "email": "mscoatesc@imdb.com",
  "message": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "date": "23.04.2022",
  "time": "10:16 AM",
  "unread": true
}, {
  "id": 14,
  "sender_name": "Moselle Bigadike",
  "email": "mbigadiked@163.com",
  "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "date": "21.06.2022",
  "time": "11:06 PM",
  "unread": true
}, {
  "id": 15,
  "sender_name": "Kelsey Parrot",
  "email": "kparrote@go.com",
  "message": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "date": "22.02.2022",
  "time": "4:07 PM",
  "unread": true
}, {
  "id": 16,
  "sender_name": "Marc Farney",
  "email": "mfarneyf@devhub.com",
  "message": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "date": "24.01.2023",
  "time": "4:31 AM",
  "unread": true
}, {
  "id": 17,
  "sender_name": "Ricki Hampe",
  "email": "rhampeg@elpais.com",
  "message": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "20.02.2022",
  "time": "9:57 AM",
  "unread": true
}, {
  "id": 18,
  "sender_name": "Jenica Harriss",
  "email": "jharrissh@bbc.co.uk",
  "message": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "date": "20.01.2023",
  "time": "12:04 AM",
  "unread": true
}, {
  "id": 19,
  "sender_name": "Shannen Ahrendsen",
  "email": "sahrendseni@army.mil",
  "message": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "date": "17.01.2023",
  "time": "6:20 AM",
  "unread": true
}, {
  "id": 20,
  "sender_name": "Robbie Pirri",
  "email": "rpirrij@cbc.ca",
  "message": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "date": "21.10.2022",
  "time": "7:54 AM",
  "unread": true
}]
const Inbox = () => {
 
  return (
    <div className='dashboard-component-container box-shadow'>
      <div className='dashboard-component-header d-flex justify-content-between pb-4'>
        <h3>Inbox</h3>
      </div>

      <div className='dashboard-component-body'>
        <InboxList inboxMessages={DUMMY_INBOX} />
      </div>
    </div>
  );
};

export default Inbox;
