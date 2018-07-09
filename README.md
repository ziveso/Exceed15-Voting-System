# Exceed15-Voting-System


- [ ] As a user, User can login to system.
ใช้ รหัส นศ 

- [ ] As a user, User can see vote page.
// get data from firebase

- [ ] As a user, User can vote a lovely team.
1 vote ต่อ 1 type
// vote -> create vote data to firebase

- [ ] As a user, User can change vote anytime
ต้องเป็น 1 vote ต่อ 1 type อยู่
// vote -> update vote data to firebase

- [ ] As a Admin, Admin can add media (Photo).

- [ ] As a Admin, Admin can add team name with a member
Maybe include description.

- [ ] As a Admin, Admin can see result in real time.


Firebase Structure
Table “vote” = {
	Count = {
		Team1: { Software: 1 , Hardware: 1 },
		Team2: { Software: 1 , Hardware: 1 },
		Team3: { Software: 1 , Hardware: 1 },
	},
	Studentid = {
		5910546384 : {	
Software : Team1,
Hardware : Team1
      },
		5910546384 : {	
Software : Team1,
Hardware : Team1
      },
		5910546384 : {	
Software : Team1,
Hardware : Team1
      },
		5910546384 : {	
Software : Team1,
Hardware : Team1
      },
	}
}

Table “team” = {
	Team1 : {
		Member1 :
		Member2 :
		Member3 :
		Member4 : 
},	
Team2 : {
		Member1 :
		Member2 :
		Member3 :
		Member4 : 
},
Team3 : {
		Member1 :
		Member2 :
		Member3 :
		Member4 : 
}
}



User, Flow

User เห็นทีม แต่โหวตไม่ได้
User login. With รหัสนิสิต
Redirect to vote page.
     4. User vote.
Vote Software
Vote Hardware

  ** If user logged-in but already vote.
	Show the voted result
  ** User can do re-vote anytime.

Admin, Flow
Admin เข้าสู่ระบบ ในหน้า /backend
Admin เห็น dashboard ( Vote Result )
Admin Add edit remove team ได้

Use.
	React + Firebase
