/// <reference types= "cypress" />

describe('API TESTING', () => {
  const randomIsbn=Math.floor(Math.random()*777)
  const randomAisle=Math.floor(Math.random()*777)
 

  const firstNames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Helen',
    'Isaac',
    'Jack'
  ];
  
  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Williams',
    'Jones',
    'Davis',
    'Miller',
    'Wilson',
    'Moore'
  ];

  it('Test Post Method ', () => {
 

    const bodyPost ={
      name:"Quality Assurance",
      isbn:randomIsbn,
      aisle:randomAisle,
      author:"Ghydaa"
      }
      
    cy.request({
      method : "POST",
      url : "https://rahulshettyacademy.com/Library/Addbook.php",
      body : bodyPost
    }).then((Response)=>{
      cy.log(Response.body)
      expect(Response.status).to.eq(200)
      expect(Response.body.Msg).to.eq("successfully added")

    })
  });

  it('Test Get Method', () => {
    cy.request({
      method:"GET",
      url:`https://rahulshettyacademy.com/Library/GetBook.php?ID=${randomIsbn}${randomAisle}`,

    }).then((Response)=>{
      expect(Response.status).to.eq(200)
      expect(Response.body[0].book_name).to.eq("Quality Assurance")
      cy.log(Response.body[0].author)
     
    

    })
    
  });

 
});