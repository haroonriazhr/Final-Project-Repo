import './BreadCrumbs.css'

const BreadCrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
      Home<i class="ri-arrow-right-s-line"></i>Shop<i class="ri-arrow-right-s-line"></i>{product.category}<i class="ri-arrow-right-s-line"></i>{product.name}  
    </div>
  )
}

export default BreadCrumbs