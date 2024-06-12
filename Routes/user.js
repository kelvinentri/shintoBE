const express = require('express')
const router = express.Router()
const USER =require('../model')
const jwt =require('jsonwebtoken')
const { verify } = require('../middlewares/middlewares')


router.post('/login', (req, res) => {

USER.findOne({userName:req.body.userName}).then((result)=>{ // null 
  if( result?.password===req.body.password){
    const payload={
      userName:result.userName,
      at:result.createdAt
    }
    console.log(process.env.JWT_PASS);
    const sKey=process.env.JWT_PASS
      const token =jwt.sign(payload,sKey,{expiresIn:'1h'})
    res.status(200).json({ message: 'successfull',token:token })
  }
  else{
    res.status(401).json({message:"invalid username or password"})
  }
})
})
router.get('/getusersdata',verify, (req, res) => {

  const users = [
    {
      id: 1,
      image: 'https://thumbs.dreamstime.com/b/urocza-pi%C4%99kna-dziewczyna-awatara-ikona-u%C5%BCytkownika-stylu-kresk%C3%B3wki-m%C5%82odej-kobiety-ilustracja-wektorowa-208819402.jpg',
      username: 'user1',
      password: 'pass1',
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234',
      address: '123 MG Road, Kochi, Kerala, India',
      role: 'Admin',
      about: 'Alice Johnson is a highly experienced administrator with over 10 years in the IT industry. She has a knack for problem-solving and excels in team management. Alice is known for her attention to detail and her ability to streamline operations to increase efficiency. Outside of work, she enjoys hiking, reading, and volunteering at local animal shelters.'
    },
    {
      id: 2,
      username: 'user2',
      image: 'https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-cartoon-boy-s-formal-blue-background-certificate-photo-png-image_4438531.png',
      password: 'pass2',
      fullName: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '555-5678',
      address: '456 Banerji Road, Ernakulam, Kerala, India',
      role: 'User',
      about: 'Bob Smith is a passionate software developer who specializes in frontend technologies. With a background in graphic design, Bob brings a unique perspective to web development, ensuring that functionality and aesthetics go hand in hand. In his spare time, Bob loves to travel and photograph landscapes, blending his technical skills with his artistic vision.'
    },
    {
      id: 3,
      username: 'user3',
      image: 'https://www.shutterstock.com/image-vector/young-woman-bandana-avatar-cartoon-260nw-1434276437.jpg',
      password: 'pass3',
      fullName: 'Carol White',
      email: 'carol.white@example.com',
      phone: '555-8765',
      address: '789 Marine Drive, Kochi, Kerala, India',
      role: 'User',
      about: 'Carol White is a detail-oriented QA engineer with a strong background in automated testing. She is dedicated to ensuring that all software products meet the highest standards of quality before release. Carol enjoys keeping up with the latest industry trends and continuously improving her skills. In her free time, she is an avid gardener and enjoys experimenting with new plant species.'
    },
    {
      id: 4,
      username: 'user4',
      image: 'https://i.ytimg.com/vi/zzOgn1TpOus/sddefault.jpg',
      password: 'pass4',
      fullName: 'David Brown',
      email: 'david.brown@example.com',
      phone: '555-4321',
      address: '101 Kaloor, Kochi, Kerala, India',
      role: 'Editor',
      about: 'David Brown is a talented content editor with a flair for creating compelling narratives. His background in journalism and communications allows him to craft engaging content that resonates with readers. David is also a skilled researcher, ensuring that all information is accurate and well-presented. He enjoys writing short stories and is an active member of a local writers\' club.'
    },
    {
      id: 5,
      username: 'user5',
      image: 'https://us.123rf.com/450wm/jemastock/jemastock1906/jemastock190614205/124215813-young-afroamerican-woman-wearing-a-blue-t-shirt-and-bandana-avatar-cartoon-character-vector.jpg',
      password: 'pass5',
      fullName: 'Eva Green',
      email: 'eva.green@example.com',
      phone: '555-6543',
      address: '202 Fort Road, Thiruvananthapuram, Kerala, India',
      role: 'User',
      about: 'Eva Green is a customer support specialist who excels in providing excellent service and resolving issues efficiently. With her calm demeanor and effective communication skills, Eva is a trusted point of contact for clients. She is passionate about helping others and continuously seeks ways to improve the customer experience. Outside of work, Eva enjoys painting and participating in community theater.'
    },
    {
      id: 6,
      username: 'user6',
      password: 'pass6',
      image: 'https://e7.pngegg.com/pngimages/714/558/png-clipart-ben10-character-ben-10-cartoon-ben-10-cartoon-miscellaneous-child.png',
      fullName: 'Frank Harris',
      email: 'frank.harris@example.com',
      phone: '555-7890',
      address: '303 Vytilla, Kochi, Kerala, India',
      role: 'Admin',
      about: 'Frank Harris is a seasoned IT manager with a strong background in network administration and cybersecurity. His extensive experience in managing complex IT infrastructures makes him an invaluable asset to the team. Frank is committed to staying updated on the latest security protocols and technologies. In his leisure time, he enjoys cycling and coaching a local youth soccer team.'
    },
    {
      id: 7,
      username: 'user7',
      image: 'https://www.shutterstock.com/image-vector/little-kid-girls-face-avatar-260nw-1412632517.jpg',
      password: 'pass7',
      fullName: 'Grace Lee',
      email: 'grace.lee@example.com',
      phone: '555-0987',
      address: '404 East Fort, Thrissur, Kerala, India',
      role: 'User',
      about: 'Grace Lee is a creative graphic designer with a passion for visual storytelling. She has worked on numerous projects ranging from branding to web design. Graces innovative approach and attention to detail have earned her several accolades. She loves exploring new design trends and tools to enhance her skills. Grace is also an avid traveler and enjoys capturing her journeys through photography.'
    },
    {
      id: 8,
      username: 'user8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf47u2axoGFNIPUbMaMTKPTCkE7pe01-UUbQ&s',
      password: 'pass8',
      fullName: 'Hank Miller',
      email: 'hank.miller@example.com',
      phone: '555-3456',
      address: '505 MG Road, Kozhikode, Kerala, India',
      role: 'User',
      about: 'Hank Miller is a dedicated backend developer known for his expertise in server-side technologies and database management. He has a keen eye for optimizing system performance and ensuring robust application functionality. Hank is passionate about learning new programming languages and frameworks. In his downtime, he enjoys building DIY electronics and playing strategy-based video games.'
    },
    {
      id: 9,
      username: 'user9',
      password: 'pass9',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhPqhUiyoSfrGWwwn0Q2U07z9TzwO9BCY55swxnLZurR0Ot-pJs24fUFz8B7bYN7V3Ag&usqp=CAU',
      fullName: 'Ivy Wilson',
      email: 'ivy.wilson@example.com',
      phone: '555-9876',
      address: '606 West Hill, Kozhikode, Kerala, India',
      role: 'Editor',
      about: 'Ivy Wilson is an experienced technical writer and editor who specializes in creating clear, concise, and user-friendly documentation. She has a strong background in software development, which enables her to communicate complex technical concepts effectively. Ivy is committed to continuous learning and enjoys attending tech conferences. In her spare time, she writes a blog about tech trends and innovations.'
    },
    {
      id: 10,
      username: 'user10',
      password: 'pass10',
      image: 'https://comicvine.gamespot.com/a/uploads/square_small/10/103617/3695908-chow-company_technician.jpg',
      fullName: 'Jack Turner',
      email: 'jack.turner@example.com',
      phone: '555-5432',
      address: '707 Kovalam, Thiruvananthapuram, Kerala, India',
      role: 'User',
      about: 'Jack Turner is a versatile full-stack developer with experience in both frontend and backend technologies. He is known for his problem-solving skills and ability to work effectively under pressure. Jack enjoys collaborating with cross-functional teams to deliver high-quality software solutions. He is a tech enthusiast and spends his free time experimenting with new programming techniques and contributing to open-source projects.'
    }
  ];
  res.status(200).json(users)
})
router.get('/getusersdata/:id', (req, res) => {

  const users = [
    {
      id: 1,
      image: 'https://thumbs.dreamstime.com/b/urocza-pi%C4%99kna-dziewczyna-awatara-ikona-u%C5%BCytkownika-stylu-kresk%C3%B3wki-m%C5%82odej-kobiety-ilustracja-wektorowa-208819402.jpg',
      username: 'user1',
      password: 'pass1',
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234',
      address: '123 MG Road, Kochi, Kerala, India',
      role: 'Admin',
      about: 'Alice Johnson is a highly experienced administrator with over 10 years in the IT industry. She has a knack for problem-solving and excels in team management. Alice is known for her attention to detail and her ability to streamline operations to increase efficiency. Outside of work, she enjoys hiking, reading, and volunteering at local animal shelters.'
    },
    {
      id: 2,
      username: 'user2',
      image: 'https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-cartoon-boy-s-formal-blue-background-certificate-photo-png-image_4438531.png',
      password: 'pass2',
      fullName: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '555-5678',
      address: '456 Banerji Road, Ernakulam, Kerala, India',
      role: 'User',
      about: 'Bob Smith is a passionate software developer who specializes in frontend technologies. With a background in graphic design, Bob brings a unique perspective to web development, ensuring that functionality and aesthetics go hand in hand. In his spare time, Bob loves to travel and photograph landscapes, blending his technical skills with his artistic vision.'
    },
    {
      id: 3,
      username: 'user3',
      image: 'https://www.shutterstock.com/image-vector/young-woman-bandana-avatar-cartoon-260nw-1434276437.jpg',
      password: 'pass3',
      fullName: 'Carol White',
      email: 'carol.white@example.com',
      phone: '555-8765',
      address: '789 Marine Drive, Kochi, Kerala, India',
      role: 'User',
      about: 'Carol White is a detail-oriented QA engineer with a strong background in automated testing. She is dedicated to ensuring that all software products meet the highest standards of quality before release. Carol enjoys keeping up with the latest industry trends and continuously improving her skills. In her free time, she is an avid gardener and enjoys experimenting with new plant species.'
    },
    {
      id: 4,
      username: 'user4',
      image: 'https://i.ytimg.com/vi/zzOgn1TpOus/sddefault.jpg',
      password: 'pass4',
      fullName: 'David Brown',
      email: 'david.brown@example.com',
      phone: '555-4321',
      address: '101 Kaloor, Kochi, Kerala, India',
      role: 'Editor',
      about: 'David Brown is a talented content editor with a flair for creating compelling narratives. His background in journalism and communications allows him to craft engaging content that resonates with readers. David is also a skilled researcher, ensuring that all information is accurate and well-presented. He enjoys writing short stories and is an active member of a local writers\' club.'
    },
    {
      id: 5,
      username: 'user5',
      image: 'https://us.123rf.com/450wm/jemastock/jemastock1906/jemastock190614205/124215813-young-afroamerican-woman-wearing-a-blue-t-shirt-and-bandana-avatar-cartoon-character-vector.jpg',
      password: 'pass5',
      fullName: 'Eva Green',
      email: 'eva.green@example.com',
      phone: '555-6543',
      address: '202 Fort Road, Thiruvananthapuram, Kerala, India',
      role: 'User',
      about: 'Eva Green is a customer support specialist who excels in providing excellent service and resolving issues efficiently. With her calm demeanor and effective communication skills, Eva is a trusted point of contact for clients. She is passionate about helping others and continuously seeks ways to improve the customer experience. Outside of work, Eva enjoys painting and participating in community theater.'
    },
    {
      id: 6,
      username: 'user6',
      password: 'pass6',
      image: 'https://e7.pngegg.com/pngimages/714/558/png-clipart-ben10-character-ben-10-cartoon-ben-10-cartoon-miscellaneous-child.png',
      fullName: 'Frank Harris',
      email: 'frank.harris@example.com',
      phone: '555-7890',
      address: '303 Vytilla, Kochi, Kerala, India',
      role: 'Admin',
      about: 'Frank Harris is a seasoned IT manager with a strong background in network administration and cybersecurity. His extensive experience in managing complex IT infrastructures makes him an invaluable asset to the team. Frank is committed to staying updated on the latest security protocols and technologies. In his leisure time, he enjoys cycling and coaching a local youth soccer team.'
    },
    {
      id: 7,
      username: 'user7',
      image: 'https://www.shutterstock.com/image-vector/little-kid-girls-face-avatar-260nw-1412632517.jpg',
      password: 'pass7',
      fullName: 'Grace Lee',
      email: 'grace.lee@example.com',
      phone: '555-0987',
      address: '404 East Fort, Thrissur, Kerala, India',
      role: 'User',
      about: 'Grace Lee is a creative graphic designer with a passion for visual storytelling. She has worked on numerous projects ranging from branding to web design. Graces innovative approach and attention to detail have earned her several accolades. She loves exploring new design trends and tools to enhance her skills. Grace is also an avid traveler and enjoys capturing her journeys through photography.'
    },
    {
      id: 8,
      username: 'user8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf47u2axoGFNIPUbMaMTKPTCkE7pe01-UUbQ&s',
      password: 'pass8',
      fullName: 'Hank Miller',
      email: 'hank.miller@example.com',
      phone: '555-3456',
      address: '505 MG Road, Kozhikode, Kerala, India',
      role: 'User',
      about: 'Hank Miller is a dedicated backend developer known for his expertise in server-side technologies and database management. He has a keen eye for optimizing system performance and ensuring robust application functionality. Hank is passionate about learning new programming languages and frameworks. In his downtime, he enjoys building DIY electronics and playing strategy-based video games.'
    },
    {
      id: 9,
      username: 'user9',
      password: 'pass9',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhPqhUiyoSfrGWwwn0Q2U07z9TzwO9BCY55swxnLZurR0Ot-pJs24fUFz8B7bYN7V3Ag&usqp=CAU',
      fullName: 'Ivy Wilson',
      email: 'ivy.wilson@example.com',
      phone: '555-9876',
      address: '606 West Hill, Kozhikode, Kerala, India',
      role: 'Editor',
      about: 'Ivy Wilson is an experienced technical writer and editor who specializes in creating clear, concise, and user-friendly documentation. She has a strong background in software development, which enables her to communicate complex technical concepts effectively. Ivy is committed to continuous learning and enjoys attending tech conferences. In her spare time, she writes a blog about tech trends and innovations.'
    },
    {
      id: 10,
      username: 'user10',
      password: 'pass10',
      image: 'https://comicvine.gamespot.com/a/uploads/square_small/10/103617/3695908-chow-company_technician.jpg',
      fullName: 'Jack Turner',
      email: 'jack.turner@example.com',
      phone: '555-5432',
      address: '707 Kovalam, Thiruvananthapuram, Kerala, India',
      role: 'User',
      about: 'Jack Turner is a versatile full-stack developer with experience in both frontend and backend technologies. He is known for his problem-solving skills and ability to work effectively under pressure. Jack enjoys collaborating with cross-functional teams to deliver high-quality software solutions. He is a tech enthusiast and spends his free time experimenting with new programming techniques and contributing to open-source projects.'
    }
  ];

  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
  console.log(userId);
})


module.exports = router