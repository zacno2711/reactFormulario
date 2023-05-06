export default function Images({image,heigthImg,widthImg}) {
    return (
      <div className="container">
       <img src={image} alt="error" style={{width:widthImg,height:heigthImg,display:'block',margin:'auto'}}/>
  
      </div>
    );
  }