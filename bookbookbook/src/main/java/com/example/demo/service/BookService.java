package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;

import jakarta.transaction.Transactional;

@Service
public class BookService {
	
	private BookRepository bookRepo;
	
	public BookService(BookRepository bookRepo) {
		this.bookRepo = bookRepo;
	}
	
	public List<Book> getAllBooks(){
		return (List<Book>) bookRepo.findAll();
	}
	
	public Book getBookById(int id) {
		return bookRepo.findById(id).orElse(null);
	}
	
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
	
	@Transactional
	public Book updateBookById(Book book,int id) {
		Book exists = bookRepo.findById(id)
	            .orElseThrow(() -> new RuntimeException("Book not found"));

        exists.setTitle(book.getTitle());
        exists.setDescription(book.getDescription());
        exists.setYear(book.getYear());

        return exists;
	}
	
	public void deleteBook(int id) {
		bookRepo.deleteById(id);
	}
	
	public void deleteAllBooks() {
		bookRepo.deleteAll();
	}
	
	public List<Book> findByPublishedYear(String year) {
		return bookRepo.findByYear(year);
	}

}
