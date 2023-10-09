# One Stop Shop

## Noroff JavaScript Frameworks Course Assigment

This project is a course assignment for Noroff. It's using Vite as the bundler and built React with TypeScript. Our objective was to demonstrate proficiency in modern web development practices, including component-based architecture and strong typing. This project showcases our skills in creating a responsive web application while fulfilling course requirements.

![Screenshot](./src/assets/Screenshot%202023-10-09%20at%2011-16-15%20One%20Stop%20Shop.png)

## Brief

Using the provided API, apply your knowledge of React to build an e-commerce store.
You will be using React Router to switch between pages.The design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

## Requirements

### Home page

- Should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

### Individual product page

- should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

### Cart page

- Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

### Checkout success page

- will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

### Contact page

- There will be a contact page which will contain a contact form with the following fields. There must be form validation:

1. Full name (Minimum number of characters is 3, required)
2. Subject (Minimum number of characters is 3, required)
3. Email (Must be a valid email address, required)
4. Body (Minimum number of characters is 3, required)

## Built With

- React
- TypeScript
- Vite

## Getting Started

### Installing

1. Clone the repo:

```bash
https://github.com/Edinanorge/js-farmeworks.git
```

2. Install the dependencies:

```
npm install
```

### Running

1. To run the app, run the following commands:

```
npm run dev
```

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## Contact Information

You can contact me.

[My LinkedIn page](www.linkedin.com/in/edina-i-42228317b)

Or you can e-mail me.

edinanorge@gmail.com

## Links

| Resource    | url                                             |
| :---------- | ----------------------------------------------- |
|             |
| Repository  | https://github.com/Edinanorge/js-farmeworks.git |
| Hosted Demo | https://stops.netlify.app                       |
