"use client";
import { useState, useEffect, useMemo } from 'react';

const items = [
  // T-Shirts
  {id: 1, name: 'A26', img: '/img/Design_1.jpeg', price: '₹499', category: 't-shirts'},
  {id: 2, name: 'A27', img: '/img/Design_2.jpeg', price: '₹549', category: 't-shirts'},
  {id: 3, name: 'A31', img: '/img/Design_3.jpeg', price: '₹499', category: 't-shirts'},
  {id: 4, name: 'A34', img: '/img/Design_4.jpeg', price: '₹599', category: 't-shirts'},
  {id: 5, name: 'A47', img: '/img/Design_5.jpeg', price: '₹549', category: 't-shirts'},
  {id: 6, name: 'A49', img: '/img/Design_6.jpeg', price: '₹499', category: 't-shirts'},
  {id: 7, name: 'A50', img: '/img/Design_7.jpeg', price: '₹599', category: 't-shirts'},
  {id: 8, name: 'A51', img: '/img/Design_8.jpeg', price: '₹549', category: 't-shirts'},
  {id: 9, name: 'A101', img: '/img/Design_9.jpeg', price: '₹499', category: 't-shirts'},
  {id: 10, name: 'A53', img: '/img/Design_10.jpeg', price: '₹599', category: 't-shirts'},
  {id: 11, name: 'A64', img: '/img/Design_11.jpeg', price: '₹549', category: 't-shirts'},
  {id: 12, name: 'A69', img: '/img/Design_12.jpeg', price: '₹499', category: 't-shirts'},
  {id: 13, name: 'A82', img: '/img/Design_13.jpeg', price: '₹599', category: 't-shirts'},
  
  // Other categories
  {id: 14, name: 'Tank Top 1', img: '/img/Design_1.jpeg', price: '₹449', category: 'tank-tops'},
  {id: 15, name: 'Hoodie 1', img: '/img/Design_2.jpeg', price: '₹899', category: 'hoodies'},
  {id: 16, name: 'Sweatshirt 1', img: '/img/Design_3.jpeg', price: '₹799', category: 'sweatshirts'},
  {id: 17, name: 'Jersey 1', img: '/img/Design_4.jpeg', price: '₹699', category: 'jerseys'},
  {id: 18, name: 'Shorts 1', img: '/img/Design_5.jpeg', price: '₹599', category: 'shorts'},
  {id: 19, name: 'Track Pants 1', img: '/img/Design_6.jpeg', price: '₹799', category: 'track-pants'},
  {id: 20, name: 'Training Pants 1', img: '/img/Design_7.jpeg', price: '₹749', category: 'training-pants'},
];

export default function Shop() {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selected, setSelected] = useState(null);
  
  // State for order form
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    quantity: 1,
    productName: '',
    productId: ''
  });

  // Handle order details change
  const handleOrderDetailsChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  // Handle order submission
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    try {
      // Format the email body
      const subject = `New Order: ${orderDetails.productName}`;
      const body = `New Order Details:%0D%0A%0D%0A` +
                  `Product: ${orderDetails.productName}%0D%0A` +
                  `Name: ${orderDetails.name}%0D%0A` +
                  `Phone: ${orderDetails.phone}%0D%0A` +
                  `Quantity: ${orderDetails.quantity}%0D%0A%0D%0A` +
                  `Order Time: ${new Date().toLocaleString()}`;
      
      // Create mailto link
      const mailtoLink = `mailto:adoodshosur@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open email client in a new tab
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSubmitStatus({ 
        success: true, 
        message: 'Order submitted successfully! Please check your email client to send the message. We will contact you shortly.' 
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setShowOrderForm(false);
        setOrderDetails({
          name: '',
          phone: '',
          quantity: 1,
          productName: selectedProduct ? selectedProduct.name : '',
          productId: selectedProduct ? selectedProduct.id : ''
        });
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to submit order. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle order now button click
  const handleOrderNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    setSelectedProduct(product);
    setOrderDetails(prev => ({
      ...prev,
      productName: product.name,
      productId: product.id,
      quantity: 1
    }));
    setShowOrderForm(true);
  };

  // Filter items based on search and category using useMemo to prevent unnecessary recalculations
  const filteredItems = useMemo(() => {
    let result = [...items];
    
    // Filter by category first if not 'all'
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    // Then filter by search term if any
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(item => 
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    }
    
    return result;
  }, [searchTerm, selectedCategory]);
  

  const categoryGroups = {
    '👕 Upper Wear': [
      { id: 't-shirts', name: '👕 T-Shirts' },
      { id: 'tank-tops', name: '💪 Tank Tops' },
      { id: 'hoodies', name: '🧥 Hoodies' },
      { id: 'sweatshirts', name: '👕 Sweatshirts' },
      { id: 'jerseys', name: '🏆 Jerseys' }
    ],
    '👖 Lower Wear': [
      { id: 'shorts', name: '🩳 Shorts' },
      { id: 'track-pants', name: '👖 Track Pants' },
      { id: 'training-pants', name: '🏋️ Training Pants' }
    ]
  };
  
  // Flatten categories for easier access
  const allCategories = [
    { id: 'all', name: 'All Products' },
    ...Object.values(categoryGroups).flat()
  ];

  // Styles
  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px', // Reduced top padding since we're already handling spacing in Layout
    minHeight: '100vh',
    boxSizing: 'border-box' // Ensure padding is included in the element's total width and height
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '20px 0',
    borderBottom: '1px solid #eee'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
    fontWeight: '700',
    letterSpacing: '1px'
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    alignItems: 'flex-start'
  };

  // Media query for mobile
  const mobileStyles = `
    @media (max-width: 1023px) {
      .main-content {
        flex-direction: column;
      }
      .sidebar {
        width: 100% !important;
        position: static !important;
      }
      .products-grid {
        padding-left: 0 !important;
        padding-top: 20px !important;
      }
    }
  `;

  const sidebarStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    position: 'sticky',
    top: '20px',
    flexShrink: 0
  };

  const productsGridStyle = {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '0 0 0 20px'
  };

  const categoryGroupsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const categoryGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const groupTitleStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    whiteSpace: 'nowrap'
  };

  const categoriesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px'
  };

  const productCardStyle = {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
    }
  };

  const productImageContainerStyle = {
    position: 'relative',
    paddingTop: '100%',
    overflow: 'hidden'
  };

  const productImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const productInfoStyle = {
    padding: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const productNameStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    margin: 0,
    color: '#333',
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const orderButtonStyle = {
    backgroundColor: '#111',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#333'
    }
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    boxSizing: 'border-box'
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    zIndex: 10
  };

  const modalContentInnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '30px'
  };

  const modalImageContainerStyle = {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#f9f9f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const modalImageStyle = {
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'contain'
  };

  const modalInfoStyle = {
    flex: '1'
  };

  const modalTitleStyle = {
    fontSize: '1.8rem',
    margin: '0 0 10px 0',
    color: '#333',
    fontWeight: '700'
  };

  const modalPriceStyle = {
    fontSize: '1.5rem',
    color: '#111',
    margin: '0 0 20px 0',
    fontWeight: '600'
  };

  const addToCartButtonStyle = {
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#333'
    }
  };

  return (
    <div className="shop-container" style={containerStyle}>
      <style jsx>{mobileStyles}</style>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Shop Our Collection</h1>
      </div>
      
      <div className="main-content" style={mainContentStyle}>
        <aside className="sidebar" style={sidebarStyle}>
          <div style={categoryGroupsStyle}>
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ margin: '0 0 15px', fontSize: '1.2rem' }}>Categories</h3>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '8px 15px',
                  borderRadius: '20px',
                  border: selectedCategory === 'all' ? '2px solid #111' : '1px solid #ddd',
                  backgroundColor: selectedCategory === 'all' ? '#f0f0f0' : 'white',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  marginBottom: '10px',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                All Products
              </button>
            </div>
            
            {Object.entries(categoryGroups).map(([groupName, categories]) => (
              <div key={groupName} style={categoryGroupStyle}>
                <h4 style={groupTitleStyle}>{groupName}</h4>
                <div style={categoriesContainerStyle}>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '15px',
                        border: selectedCategory === category.id ? '1px solid #111' : '1px solid #ddd',
                        backgroundColor: selectedCategory === category.id ? '#f0f0f0' : 'white',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </aside>
        
        <div style={{ flex: 1 }}>
          {/* Search Bar */}
          <div style={{ 
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ 
              maxWidth: '600px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px 12px 45px',
                  borderRadius: '25px',
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#999'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
              <span style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999',
                fontSize: '1.2rem'
              }}>
                🔍
              </span>
            </div>
          </div>
          <div style={{ 
            marginBottom: '20px',
            padding: '0 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
              {selectedCategory === 'all' ? 'All Products' : 
               categoryGroups['👕 Upper Wear'].concat(categoryGroups['👖 Lower Wear'])
                .find(cat => cat.id === selectedCategory)?.name || 'Products'}
            </h2>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
          <div className="products-grid" style={productsGridStyle}>
          {filteredItems.map(item => (
            <div key={item.id} style={productCardStyle}>
              <div style={productImageContainerStyle}>
                <img 
                  src={item.img} 
                  alt={item.name}
                  style={productImageStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProduct(item);
                    setOrderDetails(prev => ({
                      ...prev,
                      productName: item.name,
                      productId: item.id,
                      quantity: 1
                    }));
                    setShowOrderForm(true);
                  }}
                />
              </div>
              <div style={productInfoStyle}>
                <h3 style={productNameStyle}>
                  {item.name}
                </h3>
                <div style={{ marginTop: '15px' }}>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProduct(item);
                      setOrderDetails(prev => ({
                        ...prev,
                        productName: item.name,
                        productId: item.id,
                        quantity: 1
                      }));
                      setShowOrderForm(true);
                    }}
                    style={{
                      ...orderButtonStyle,
                      width: '100%',
                      padding: '10px',
                      fontSize: '1rem'
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              padding: '40px 20px',
              color: '#666'
            }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>No products found</p>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                style={{
                  marginTop: '15px',
                  padding: '8px 20px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
      
      {selected && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px',
          overflow: 'auto'
        }} onClick={() => setSelected(null)}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '30px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }} onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                setSelected(null);
              }}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              ×
            </button>
            
            <div style={modalContentInnerStyle}>
              <div style={modalImageContainerStyle}>
                <img 
                  src={selected.img} 
                  alt={selected.name}
                  style={modalImageStyle}
                />
              </div>
              
              <div style={modalInfoStyle}>
                <h2 style={modalTitleStyle}>{selected.name}</h2>
                <p style={modalPriceStyle}>{selected.price}</p>
                <button 
                  style={addToCartButtonStyle}
                  onClick={() => {
                    // Add to cart functionality here
                    alert(`${selected.name} added to cart!`);
                  }}
                >
                  Add to Cart
                </button>
                
                <div style={{ marginTop: '30px' }}>
                  <h3 style={{ margin: '0 0 10px', fontSize: '1.1rem' }}>Description</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    This is a high-quality {selected.name} made from premium materials. 
                    It's designed for comfort and style, perfect for any occasion.
                  </p>
                </div>
                
                <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                  <p>Free shipping on all orders</p>
                  <p>30-day return policy</p>
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '30px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={handleCloseForm}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                zIndex: 1
              }}
              disabled={isSubmitting}
            >
              ×
            </button>
            
            <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Order Details</h2>
            <p style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.1rem' }}>
              <strong>Product:</strong> {orderDetails.productName}
            </p>
            
            <form onSubmit={handleOrderSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleOrderDetailsChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={orderDetails.phone}
                  onChange={handleOrderDetailsChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={orderDetails.quantity}
                  onChange={handleOrderDetailsChange}
                  style={{
                    width: '100px',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              {submitStatus.message && (
                <div style={{
                  margin: '15px 0',
                  padding: '10px',
                  backgroundColor: submitStatus.success ? '#e8f5e9' : '#ffebee',
                  color: submitStatus.success ? '#2e7d32' : '#c62828',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#888' : '#111',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  width: '100%',
                  marginTop: '10px',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
