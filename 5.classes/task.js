class PrintEditionItem {
	#state;
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.#state = 100;
		this.type = null;
	}
	set state(state) {
		if (state < 0) {
			this.#state = 0
		} else if (state > 100) {
			this.#state = 100
		} else this.#state = state;
	}
	get state() {
		return this.#state;
	}
	fix() {
		this.state = this.state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book"
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic"
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective"
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	findBookBy(typeString, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][typeString] === value) {
				return this.books[i];
			}
		}
		return null;
	}
    giveBookByName(bookName) {
        let foundBook = this.findBookBy("name", bookName);
        if (foundBook !== null) {
            this.books = this.books.filter((book) => book !== foundBook)
        }
        return foundBook;
    }
}