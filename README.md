Curso: React JS - Coder House
Comisi�n: 24915
Alumno: Daniel Tenconi

Hola, buen d�a.
Hago entrega del e-commerce realziado en la cursada de React Js en la camada 24915 de CoderHouse.
![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/thunderBrand.png)

� Para la realizaci�n de este he decidido realizar un e-commerce de venta de calzado, vestimenta e insumos deportivos "Thunder".

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/ecommerce.gif)
 

� La navegaci�n en la app, se realiza a trav�s del nav y a traves de cada card, donde podremos acceder a la la seccci�n de Categor�as y asus respectivas sub-secciones, se puede acceder tambi�n a los articulos que se encuentran en oferta, como as� tambi�n al cart.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/nav.jpg)

� Con respecto a las tarjeta se puede diferenciar entre los productos que poseen oferta y los que no. 
Cada producto posee un elemento booleano que nos indica si posee oferta o no.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/cards.jpg)

� Para la obtenci�n de productos, la app realiza una petici�n a Firebase, donde se encuentran los productos cargados.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/cart.jpg) 

� Al ingresar en cada producto ingresaremos al detalle del mismo, donde nos arrojar� m�s informaci�n, podremos ver el stock del prodcuto, como as� tambien podremos visualizar un contador que nos permitira incrementar y decrementar la cantidad de unidades deseadas, nos permitir� tambien agregar el producto a nuestro carro de compra y finalizar la operaci�n llevandonos a la secci�n de cart.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/detailed.jpg)

� A medida que vamos seleccionando productos, se deplegar� una notificaci�n en el icono del cart donde podremos visualizar la cantidad de productos en el mismo.

� En caso de que agreguemos m�s unidades de un mismo prodcuto, nuestra app nos notificar� que este producto se encuentra en nuestro carro y nos consultar� si deseamos agregar m�s productos.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/ask.jpg) 

� Una vez en la secci�n cart, podremos visualizar los productos seleccionados, la cantidad de items y el precio de los mismos.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/cartScreen.jpg) 

En esta pantalla podremos eliminar cada Item, vaciar por completo el cart, como as� tambien confirmar la compra.

� Una vez confirmemos la compra nos llevar� ala pantalla donde donde nos mostrar� el detalle de la compra y un formulario donde dejaremos nuestros datos.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/confirmScreen.jpg) 

� Al confirmar o efectivizar nuestra compra se crear� un archivo en nuestra base de datos, en firebase, con nuestros datos y nos arrojara un numero de comprobante (ID de nuestro nuevo documento) y nos lo notificar� a modo de comprobante.

![img](https://github.com/tenconi/tenconi-React/blob/master/markdown/env.jpg)

# Tenconi Daniel

=======================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
