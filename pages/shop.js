"use client";
import { useState, useEffect } from 'react';

export default function Shop() {
  const items = [
    {id: 1, name: 'A26', img: '/img/Design_1.jpeg', price: '₹499', category: 't-shirt'},
    {id: 2, name: 'A27', img: '/img/Design_2.jpeg', price: '₹549', category: 't-shirt'},
    {id: 3, name: 'A31', img: '/img/Design_3.jpeg', price: '₹499', category: 't-shirt'},
    {id: 4, name: 'A34', img: '/img/Design_4.jpeg', price: '₹599', category: 't-shirt'},
    {id: 5, name: 'A47', img: '/img/Design_5.jpeg', price: '₹549', category: 't-shirt'},
    {id: 6, name: 'A49', img: '/img/Design_6.jpeg', price: '₹499', category: 't-shirt'},
    {id: 7, name: 'A50', img: '/img/Design_7.jpeg', price: '₹599', category: 't-shirt'},
    {id: 8, name: 'A51', img: '/img/Design_8.jpeg', price: '₹549', category: 't-shirt'},
    {id: 9, name: 'A101', img: '/img/Design_9.jpeg', price: '₹499', category: 't-shirt'},
    {id: 10, name: 'A53', img: '/img/Design_10.jpeg', price: '₹599', category: 't-shirt'},
    {id: 11, name: 'A64', img: '/img/Design_11.jpeg', price: '₹549', category: 't-shirt'},
    {id: 12, name: 'A69', img: '/img/Design_12.jpeg', price: '₹499', category: 't-shirt'},
    {id: 13, name: 'A82', img: '/img/Design_13.jpeg', price: '₹599', category: 't-shirt'},
  ];

  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter items based on search and category
  useEffect(() => {
    let result = items;
    
    if (searchTerm) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(result);
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...new Set(items.map(item => item.category))];

  return (
    <div className="shop-container" style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '20px 0',
        borderBottom: '1px solid #eee'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '20px',
          fontWeight: '700',
          letterSpacing: '1px'
        }}>Shop Our Collection</h1>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              fontSize: '0.9rem',
              cursor: 'pointer',
              outline: 'none',
              backgroundColor: 'white',
              height: '40px',
              minWidth: '150px'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          color: '#666'
        }}>
          <p style={{ fontSize: '1.2rem' }}>No products found. Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          padding: '0 10px'
        }}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="product-card"
              style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
              onClick={() => setSelected(item)}
            >
              <div style={{
                position: 'relative',
                paddingTop: '100%',
                overflow: 'hidden',
                backgroundColor: '#f9f9f9'
              }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  margin: '0 0 15px 0',
                  fontSize: '1.2rem',
                  color: '#333',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  {item.name}
                </h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(item);
                  }}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '0.85rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#333';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#111';
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px',
          boxSizing: 'border-box',
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                zIndex: 10
              }}
            >
              ×
            </button>
            
            <div style={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '30px',
              padding: '30px'
            }}>
              <div style={{
                flex: '1',
                minWidth: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#f9f9f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <img 
                  src={selected.img} 
                  alt={selected.name} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              
              <div style={{ flex: '1' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  margin: '0 0 10px 0',
                  color: '#333',
                  fontWeight: '700'
                }}>
                  {selected.name}
                </h2>
                
                <p style={{
                  fontSize: '1.5rem',
                  color: '#111',
                  fontWeight: '700',
                  margin: '0 0 20px 0'
                }}>
                  {selected.price}
                </p>
                
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '30px'
                }}>
                  High-quality t-shirt with unique design. Made from 100% cotton for maximum comfort.
                </p>
                
                <form 
                  action="https://formspree.io/f/YOUR_FORM_ID" 
                  method="POST" 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                  }}
                >
                  <input type="hidden" name="product_id" value={selected.id} />
                  <input type="hidden" name="product_name" value={selected.name} />
                  
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#444'
                    }}>
                      Your Name
                    </label>
                    <input 
                      name="name" 
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '6px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#444'
                    }}>
                      Phone Number
                    </label>
                    <input 
                      name="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      required 
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '6px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#444'
                    }}>
                      Quantity
                    </label>
                    <input 
                      name="order_count" 
                      type="number" 
                      min="1" 
                      defaultValue="1" 
                      required 
                      style={{
                        width: '100px',
                        padding: '12px 15px',
                        borderRadius: '6px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    style={{
                      background: '#111',
                      color: 'white',
                      padding: '15px 25px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1rem',
                      marginTop: '10px',
                      transition: 'background 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#333';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#111';
                    }}
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
