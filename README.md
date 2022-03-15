Curso: React JS - Coder House
Comisión: 24915
Alumno: Daniel Tenconi

Hola, buen día.
Hago entrega del e-commerce realziado en la cursada de React Js en la camada 24915 de CoderHouse.

• Para la realización de este he decidido realizar un e-commerce de venta de calzado, vestimenta e insumos deportivos "Thunder".

	
 

• La navegación en la app, se realiza a través del nav y a traves de cada card, donde podremos acceder a la la seccción de Categorías y asus respectivas sub-secciones, se puede acceder también a los articulos que se encuentran en oferta, como así también al cart.

 

• Con respecto a las tarjeta se puede diferenciar entre los productos que poseen oferta y los que no. 
Cada producto posee un elemento booleano que nos indica si posee oferta o no.

 

• Para la obtención de productos, la app realiza una petición a Firebase, donde se encuentran los productos cargados.

 

• Al ingresar en cada producto ingresaremos al detalle del mismo, donde nos arrojará más información, podremos ver el stock del prodcuto, como así tambien podremos visualizar un contador que nos permitira incrementar y decrementar la cantidad de unidades deseadas, nos permitirá tambien agregar el producto a nuestro carro de compra y finalizar la operación llevandonos a la sección de cart.

 

• A medida que vamos seleccionando productos, se deplegará una notificación en el icono del cart donde podremos visualizar la cantidad de productos en el mismo.

• En caso de que agreguemos más unidades de un mismo prodcuto, nuestra app nos notificará que este producto se encuentra en nuestro carro y nos consultará si deseamos agregar más productos.

 

• Una vez en la sección cart, podremos visualizar los productos seleccionados, la cantidad de items y el precio de los mismos.

 

En esta pantalla podremos eliminar cada Item, vaciar por completo el cart, como así tambien confirmar la compra.

• Una vez confirmemos la compra nos llevará ala pantalla donde donde nos mostrará el detalle de la compra y un formulario donde dejaremos nuestros datos.

 

• Al confirmar o efectivizar nuestra compra se creará un archivo en nuestra base de datos, en firebase, con nuestros datos y nos arrojara un numero de comprobante (ID de nuestro nuevo documento) y nos lo notificará a modo de comprobante.


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
