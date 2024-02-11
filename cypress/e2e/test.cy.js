/// <reference types= "cypress" />

describe('API TESTING', () => {
 

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

  const randomIsbn=Math.floor(Math.random()*777)
  const randomAisle=Math.floor(Math.random()*777)
  const randomAuthor=Math.floor(Math.random()*firstNames.length)
  const randomAuthor2=Math.floor(Math.random()*lastNames.length)
  const authorindex=firstNames[randomAuthor]+' '+lastNames[randomAuthor2]
 

  it('Test Post Request ', () => {
 

    const bodyPost ={
      name:"Quality Assurance",
      isbn:randomIsbn,
      aisle:randomAisle,
      author:authorindex
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

  it('Test Get Request', () => {
    
    cy.request({
      method:"GET",
      url:`https://rahulshettyacademy.com/Library/GetBook.php?ID=${randomIsbn}${randomAisle}`
    }).then((Response)=>{
      expect(Response.status).to.eq(200)
      expect(Response.body[0].book_name).to.eq("Quality Assurance")
      expect(Response.body[0].author).to.eq(authorindex)
      cy.log(Response.body[0].author)
  
    })
    
  });
  it('Test Delete Request', () => {
    const bodydel={
      ID : `${randomIsbn}${randomAisle}`
      }

      
    cy.request({

      method:"DELETE",
      url:"https://rahulshettyacademy.com/Library/DeleteBook.php",
      body:bodydel
    }).then((Response)=>{
      cy.log(Response.body)
      expect(Response.status).to.eq(200)
      expect(Response.body.msg).to.eq("book is successfully deleted")
      
    })
  });

 
});