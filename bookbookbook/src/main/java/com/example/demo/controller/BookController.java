package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptionhandling.ResourceNotFoundException;
import com.example.demo.model.Book;
import com.example.demo.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	BookService bookService;
	
	@GetMapping("/getAll")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/get/{id}")
	public Book getBook(@PathVariable int id) throws ResourceNotFoundException{
		Book book = bookService.getBookById(id);
		if (book == null) throw new ResourceNotFoundException("Book not found");
		return book;
	}
	
	@PostMapping("/add")
	public Book addBook(@RequestBody Book book) {
		return bookService.createBook(book);
	} 
	
	@PutMapping("/update/{id}") 
	public Book update(@PathVariable int id,@RequestBody Book book) throws ResourceNotFoundException{
		Book curr = bookService.getBookById(id);
		if (curr == null) throw new ResourceNotFoundException("Book not found");
		return bookService.updateBookById(book, id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable int id) throws ResourceNotFoundException{
		Book book = bookService.getBookById(id);
		if (book == null) throw new ResourceNotFoundException("Book not found");
		bookService.deleteBook(id);
	}
	
	@DeleteMapping("/delete/all")
	public void deleteAll() {
		bookService.deleteAllBooks();
	}
	
	@GetMapping("/find/{year}")
	public List<Book> findByYear(@PathVariable String year ) {
		return bookService.findByPublishedYear(year);
	} 

}
