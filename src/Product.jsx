import "./Product.css";
function Product(props) {
    console.log(props);
    return (
        <div className="Product">
            <h3>Product Title</h3>
            <h5> product description</h5>
        </div>
    );
}
export default Product;