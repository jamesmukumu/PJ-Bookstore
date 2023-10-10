const Book = require("../Model/booksmodel");
const db = require('../db/dconnections')

const Sequelize = db.Sequelize

async function postBooks(req, res) {
  try {
    const insertedBook = new Book({
      bookPrice: req.body.bookPrice,
      bookImage: req.body.bookImage,
      bookContent: req.body.bookContent,
      Category: req.body.Category,
      bookTitle: req.body.bookTitle,
      bookSize: req.body.bookSize
    });
    await insertedBook.save()
    res.json({ message: "Book inserted Successfully", data: insertedBook })
  } catch (error) {
    res.json({ error })
  }
}

//get all books

async function getAllbooks(req,res){
try {
const allbooks = await Book.findAll()
res.status(200).json({message:'all books fetched',data:allbooks})
  
} catch (error) {
  res.status(500).json({error:"Error in fetching all Books"})
}




}


// get books based on bookTitle
async function getBookontitle(req, res) {
  try {
    const inputBooktitle = req.query.bookTitle
    const matchingBook = await Book.findAll({ where: { bookTitle: { [Sequelize.Op.iLike]: `%${inputBooktitle}%` } } })
    if (matchingBook.length===0) {
      return res.json({ error: 'Book Not Found' })
    }
    if (matchingBook) {
    return  res.json({message:'book found',data:matchingBook})
    }
  } catch (error) {
    return res.json({ error: 'Error in connecting to the db' })
  }
}



//get books per Categpry
async function getBooksonCategory(req,res){
try {
const filteredCategory = req.query.Category
const matchingCategory = await Book.findAll({where:{Category:filteredCategory}})
if(matchingCategory.length===0){
  return res.json({error:'Books cannot be Found based on this category'})
}
else{
return res.json({message:'All books in the db',data:matchingCategory})
} 

   
} catch (error) { 
  return res.json({error:'internal error'})
}

}


//get total books Stored in the db

async function countallBooks(req, res) {
  try {
    const count = await Book.count(); 
    res.json({message:'all books',data:count});
  } catch (error) {
    res.json({ error: "Error in fetching all books" });
  }
} 


//count all books categorywise
async function countallbooksCategory(req,res){
try {
const wantedCategory = req.query.Category
const countBooks = await Book.count({where:{Category:wantedCategory}})
res.json({message:'books on this category are',data:countBooks})
} catch (error) {
  res.json({error:'Error in Counting Documents'})
}
}



//delete a book in db based on bookTitle

async function deleteBook(req,res){
try {
const selectedBooktitle = req.query.bookTitle
const deletedBook = await Book.destroy({where:{bookTitle:{[Sequelize.Op.iLike]:`%${selectedBooktitle}%`}}})
if(deletedBook===0){
res.status(200).json({message:'Book Not in The DB hence cannot be Deleted'})
}
else{ 
  res.status(200).json({message:'Book has been deleted'})
}
  
} catch (error) {
  res.status(500).json({error})
}
}
 
    
 













module.exports = {
  postBooks,
  getBookontitle,
  getBooksonCategory,
  countallBooks,
  countallbooksCategory,
  deleteBook,
  getAllbooks
}
