function Products( {info, sininfo} ) {
  return (
    <>
        <section className="grid">
        {info.map((items, i) => (
          <div className="cards" style={{ width: "18rem" }} key={i}>
            <img src={items.image} className="card-img-top" alt="..." />
            <hr />
            <div className="card-body">
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text">{items.category}</p>
            </div>
            <div className="btn-con">
            <span className="btn">{items.price}<strong>$</strong></span>
            <button
              className="btn-b"
            >
              Agregar al carrito
            </button>
            </div>
          </div>
        ))}
        <div className="container">
          {
            sininfo && <p className='sin'>No se encontraron los productos 😢...</p> 
          }
        </div>
      </section>
    </>
  )
}

export default Products