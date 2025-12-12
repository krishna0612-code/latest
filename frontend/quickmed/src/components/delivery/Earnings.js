// import React, { useState} from 'react';

// const Earnings = ({ deliveryData }) => {
//   const [earningFilter, setEarningFilter] = useState('today');
//   const [showAllMonths, setShowAllMonths] = useState(false);
//   const [allMonthsData, setAllMonthsData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const styles = {
//     mainContent: {
//       padding: '30px',
//       minHeight: '100vh',
//       backgroundColor: '#E0F2F1'
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       marginBottom: '30px'
//     },
//     greeting: {
//       fontSize: '28px',
//       fontWeight: '700',
//       color: '#124441',
//       margin: '0 0 8px 0'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#4F6F6B',
//       margin: 0
//     },
//     earningFilters: {
//       display: 'flex',
//       gap: '8px',
//       backgroundColor: 'white',
//       padding: '4px',
//       borderRadius: '8px',
//       border: '1px solid #4DB6AC',
//       alignItems: 'center'
//     },
//     earningFilter: {
//       padding: '8px 16px',
//       backgroundColor: 'transparent',
//       border: 'none',
//       borderRadius: '6px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: '500',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '6px',
//       color: '#124441'
//     },
//     earningFilterActive: {
//       backgroundColor: '#009688',
//       color: 'white'
//     },
//     monthDropdown: {
//       marginLeft: '0'
//     },
//     monthSelect: {
//       padding: '8px 12px',
//       border: '1px solid #4DB6AC',
//       borderRadius: '6px',
//       fontSize: '14px',
//       backgroundColor: 'white',
//       minWidth: '150px',
//       color: '#124441'
//     },
//     earningsSummary: {
//       backgroundColor: 'white',
//       padding: '24px',
//       borderRadius: '12px',
//       boxShadow: '0 2px 8px rgba(0,150,136,0.1)',
//       marginBottom: '24px',
//       border: '1px solid #E0F2F1'
//     },
//     earningStats: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '20px'
//     },
//     earningStat: {
//       textAlign: 'center',
//       padding: '16px',
//       backgroundColor: '#E0F2F1',
//       borderRadius: '8px',
//       border: '1px solid #4DB6AC'
//     },
//     earningAmount: {
//       fontSize: '24px',
//       fontWeight: '700',
//       color: '#009688',
//       margin: '0 0 8px 0'
//     },
//     earningLabel: {
//       fontSize: '14px',
//       color: '#4F6F6B',
//       margin: '0 0 12px 0',
//       fontWeight: '500'
//     },
//     metricDetail: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px',
//       paddingTop: '12px',
//       borderTop: '1px solid #4DB6AC'
//     },
//     metricValue: {
//       fontSize: '16px',
//       fontWeight: '600',
//       color: '#124441'
//     },
//     metricLabel: {
//       fontSize: '12px',
//       color: '#4F6F6B'
//     },
//     sectionTitle: {
//       fontSize: '20px',
//       fontWeight: '600',
//       color: '#124441',
//       margin: '0 0 16px 0'
//     },
//     sectionHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '20px'
//     },
//     viewAll: {
//       fontSize: '14px',
//       color: '#009688',
//       fontWeight: '500',
//       cursor: 'pointer',
//       padding: '8px 16px',
//       border: '1px solid #009688',
//       borderRadius: '6px',
//       transition: 'all 0.3s ease',
//       backgroundColor: 'white'
//     },
//     viewAllHover: {
//       backgroundColor: '#009688',
//       color: 'white'
//     },
//     earningsHistory: {
//       backgroundColor: 'white',
//       padding: '24px',
//       borderRadius: '12px',
//       boxShadow: '0 2px 8px rgba(0,150,136,0.1)',
//       marginBottom: '24px',
//       border: '1px solid #E0F2F1'
//     },
//     earningsList: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '12px'
//     },
//     earningItem: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       padding: '16px',
//       border: '1px solid #4DB6AC',
//       borderRadius: '8px',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//       backgroundColor: 'white'
//     },
//     earningItemHover: {
//       backgroundColor: '#E0F2F1',
//       borderColor: '#009688'
//     },
//     earningDate: {
//       flex: 1
//     },
//     earningDateText: {
//       fontSize: '14px',
//       color: '#124441',
//       marginBottom: '8px',
//       display: 'block',
//       fontWeight: '600'
//     },
//     earningMeta: {
//       display: 'flex',
//       gap: '8px',
//       flexWrap: 'wrap'
//     },
//     metaBadge: {
//       fontSize: '11px',
//       padding: '4px 8px',
//       backgroundColor: '#E0F2F1',
//       color: '#4F6F6B',
//       borderRadius: '12px',
//       fontWeight: '500',
//       border: '1px solid #4DB6AC'
//     },
//     earningAmountItem: {
//       fontSize: '16px',
//       fontWeight: '600',
//       color: '#009688'
//     },
//     loadingSpinner: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '40px'
//     },
//     spinner: {
//       width: '40px',
//       height: '40px',
//       border: '4px solid #E0F2F1',
//       borderTop: '4px solid #009688',
//       borderRadius: '50%',
//       animation: 'spin 1s linear infinite'
//     },
//     noData: {
//       textAlign: 'center',
//       padding: '40px',
//       color: '#4F6F6B',
//       fontSize: '16px'
//     },
//     pagination: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '16px',
//       marginTop: '20px',
//       padding: '16px'
//     },
//     paginationButton: {
//       padding: '8px 16px',
//       border: '1px solid #4DB6AC',
//       backgroundColor: 'white',
//       borderRadius: '6px',
//       cursor: 'pointer',
//       fontSize: '14px',
//       transition: 'all 0.3s ease',
//       color: '#124441'
//     },
//     paginationButtonHover: {
//       backgroundColor: '#009688',
//       color: 'white',
//       borderColor: '#009688'
//     },
//     paginationButtonDisabled: {
//       opacity: 0.5,
//       cursor: 'not-allowed',
//       backgroundColor: '#E0F2F1',
//       color: '#4F6F6B'
//     },
//     paginationInfo: {
//       fontSize: '14px',
//       color: '#4F6F6B'
//     }
//   };

//   // Enhanced months data for earnings
//   const initialMonthsData = [
//     { value: 'january', label: 'January 2025', earnings: 15200, deliveries: 230, cancelled: 5, year: 2025 },
//     { value: 'december', label: 'December 2024', earnings: 14200, deliveries: 215, cancelled: 8, year: 2024 },
//     { value: 'november', label: 'November 2024', earnings: 13200, deliveries: 198, cancelled: 12, year: 2024 },
//     { value: 'october', label: 'October 2024', earnings: 14800, deliveries: 225, cancelled: 6, year: 2024 },
//     { value: 'september', label: 'September 2024', earnings: 12800, deliveries: 190, cancelled: 10, year: 2024 },
//     { value: 'august', label: 'August 2024', earnings: 13500, deliveries: 205, cancelled: 7, year: 2024 }
//   ];

//   // Extended data for "View All" functionality
//   const extendedMonthsData = [
//     ...initialMonthsData,
//     { value: 'july', label: 'July 2024', earnings: 12100, deliveries: 185, cancelled: 9, year: 2024 },
//     { value: 'june', label: 'June 2024', earnings: 11800, deliveries: 180, cancelled: 11, year: 2024 },
//     { value: 'may', label: 'May 2024', earnings: 12500, deliveries: 195, cancelled: 8, year: 2024 },
//     { value: 'april', label: 'April 2024', earnings: 11500, deliveries: 175, cancelled: 12, year: 2024 },
//     { value: 'march', label: 'March 2024', earnings: 12200, deliveries: 188, cancelled: 7, year: 2024 },
//     { value: 'february', label: 'February 2024', earnings: 11000, deliveries: 168, cancelled: 15, year: 2024 },
//     { value: 'january-2024', label: 'January 2024', earnings: 10500, deliveries: 162, cancelled: 13, year: 2024 },
//     { value: 'december-2023', label: 'December 2023', earnings: 9800, deliveries: 155, cancelled: 10, year: 2023 },
//     { value: 'november-2023', label: 'November 2023', earnings: 9200, deliveries: 145, cancelled: 12, year: 2023 },
//     { value: 'october-2023', label: 'October 2023', earnings: 8900, deliveries: 140, cancelled: 14, year: 2023 }
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Simulate API call to fetch all months data
//   const fetchAllMonthsData = async () => {
//     setIsLoading(true);
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setAllMonthsData(extendedMonthsData);
//     setIsLoading(false);
//   };

//   // Handle View All click
//   const handleViewAllClick = () => {
//     if (!showAllMonths) {
//       fetchAllMonthsData();
//     }
//     setShowAllMonths(!showAllMonths);
//     setCurrentPage(1);
//   };

//   // Calculate metrics based on current filter
//   const getFilteredMetrics = () => {
//     const selectedMonth = initialMonthsData.find(month => month.value === earningFilter);

//     switch (earningFilter) {
//       case 'today':
//         return {
//           totalEarnings: deliveryData.stats.todayEarnings,
//           totalDeliveries: deliveryData.stats.completed,
//           cancelledDeliveries: deliveryData.stats.cancelled,
//           averagePerDelivery: deliveryData.stats.completed > 0 ?
//             Math.round(deliveryData.stats.todayEarnings / deliveryData.stats.completed) : 0,
//           efficiency: '94%',
//           activeHours: '8h 30m'
//         };
//       case 'week':
//         return {
//           totalEarnings: 3850,
//           totalDeliveries: 55,
//           cancelledDeliveries: 8,
//           averagePerDelivery: Math.round(3850 / 55),
//           efficiency: '92%',
//           activeHours: '42h 15m'
//         };
//       case 'month':
//         // Current month data
//         const currentMonthData = initialMonthsData[0];
//         return {
//           totalEarnings: currentMonthData.earnings,
//           totalDeliveries: currentMonthData.deliveries,
//           cancelledDeliveries: currentMonthData.cancelled,
//           averagePerDelivery: Math.round(currentMonthData.earnings / currentMonthData.deliveries),
//           efficiency: '93%',
//           activeHours: '178h 30m'
//         };
//       default:
//         // For specific months
//         if (selectedMonth) {
//           return {
//             totalEarnings: selectedMonth.earnings,
//             totalDeliveries: selectedMonth.deliveries,
//             cancelledDeliveries: selectedMonth.cancelled,
//             averagePerDelivery: Math.round(selectedMonth.earnings / selectedMonth.deliveries),
//             efficiency: selectedMonth.value === 'january' ? '93%' :
//               selectedMonth.value === 'december' ? '90%' : '88%',
//             activeHours: selectedMonth.value === 'january' ? '178h 30m' :
//               selectedMonth.value === 'december' ? '165h 45m' : '155h 20m'
//           };
//         } else {
//           // Default to current month
//           const currentMonthData = initialMonthsData[0];
//           return {
//             totalEarnings: currentMonthData.earnings,
//             totalDeliveries: currentMonthData.deliveries,
//             cancelledDeliveries: currentMonthData.cancelled,
//             averagePerDelivery: Math.round(currentMonthData.earnings / currentMonthData.deliveries),
//             efficiency: '93%',
//             activeHours: '178h 30m'
//           };
//         }
//     }
//   };

//   const formatIndianCurrency = (amount) => {
//     return `₹${amount.toLocaleString('en-IN')}`;
//   };

//   const metrics = getFilteredMetrics();
//   const selectedMonth = initialMonthsData.find(month => month.value === earningFilter);

//   // Calculate pagination
//   const totalPages = Math.ceil(allMonthsData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentMonthsData = showAllMonths ?
//     allMonthsData.slice(startIndex, endIndex) :
//     initialMonthsData.slice(0, 6);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Add CSS animation for spinner
//   const spinnerStyles = `
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   `;

//   return (
//     <div style={styles.mainContent}>
//       <style>{spinnerStyles}</style>

//       <div style={styles.header}>
//         <div>
//           <h1 style={styles.greeting}>Earnings</h1>
//           <p style={styles.subtitle}>Track your delivery earnings and performance</p>
//         </div>
//         <div style={styles.earningFilters}>
//           <button
//             style={{
//               ...styles.earningFilter,
//               ...(earningFilter === 'today' ? styles.earningFilterActive : {})
//             }}
//             onClick={() => setEarningFilter('today')}
//             onMouseEnter={(e) => {
//               if (earningFilter !== 'today') {
//                 e.currentTarget.style.backgroundColor = '#E0F2F1';
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (earningFilter !== 'today') {
//                 e.currentTarget.style.backgroundColor = 'transparent';
//               }
//             }}
//           >
//             Today
//           </button>
//           <button
//             style={{
//               ...styles.earningFilter,
//               ...(earningFilter === 'week' ? styles.earningFilterActive : {})
//             }}
//             onClick={() => setEarningFilter('week')}
//             onMouseEnter={(e) => {
//               if (earningFilter !== 'week') {
//                 e.currentTarget.style.backgroundColor = '#E0F2F1';
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (earningFilter !== 'week') {
//                 e.currentTarget.style.backgroundColor = 'transparent';
//               }
//             }}
//           >
//             This Week
//           </button>
//           <div style={styles.monthDropdown}>
//             <select
//               value={earningFilter}
//               onChange={(e) => setEarningFilter(e.target.value)}
//               style={styles.monthSelect}
//             >
//               <option value="" disabled>Select Month</option>
//               {initialMonthsData.map(month => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       <div style={styles.earningsSummary}>
//         <div style={styles.earningStats}>
//           <div style={styles.earningStat}>
//             <h3 style={styles.earningAmount}>
//               {formatIndianCurrency(metrics.totalEarnings)}
//             </h3>
//             <p style={styles.earningLabel}>Total Earnings</p>
//             <div style={styles.metricDetail}>
//               <span style={styles.metricValue}>{metrics.activeHours}</span>
//               <span style={styles.metricLabel}>Active Time</span>
//             </div>
//           </div>
//           <div style={styles.earningStat}>
//             <h3 style={styles.earningAmount}>
//               {metrics.totalDeliveries}
//             </h3>
//             <p style={styles.earningLabel}>Total Deliveries</p>
//             <div style={styles.metricDetail}>
//               <span style={styles.metricValue}>{metrics.efficiency}</span>
//               <span style={styles.metricLabel}>Efficiency</span>
//             </div>
//           </div>
//           <div style={styles.earningStat}>
//             <h3 style={styles.earningAmount}>
//               {metrics.cancelledDeliveries}
//             </h3>
//             <p style={styles.earningLabel}>Cancelled Orders</p>
//             <div style={styles.metricDetail}>
//               <span style={styles.metricValue}>
//                 {metrics.totalDeliveries > 0 ?
//                   Math.round((metrics.cancelledDeliveries / metrics.totalDeliveries) * 100) : 0}%
//               </span>
//               <span style={styles.metricLabel}>Cancellation Rate</span>
//             </div>
//           </div>
//           <div style={styles.earningStat}>
//             <h3 style={styles.earningAmount}>
//               {formatIndianCurrency(metrics.averagePerDelivery)}
//             </h3>
//             <p style={styles.earningLabel}>Average per Delivery</p>
//             <div style={styles.metricDetail}>
//               <span style={styles.metricValue}>
//                 {earningFilter === 'today' ? '12' :
//                   earningFilter === 'week' ? '7.8' : '6.5'}
//               </span>
//               <span style={styles.metricLabel}>Deliveries/Hour</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Month Details Section */}
//       {selectedMonth && (
//         <div style={styles.earningsHistory}>
//           <h3 style={styles.sectionTitle}>Month Details - {selectedMonth.label}</h3>
//           <div style={styles.earningStats}>
//             <div style={styles.earningStat}>
//               <h3 style={styles.earningAmount}>{formatIndianCurrency(selectedMonth.earnings)}</h3>
//               <p style={styles.earningLabel}>Total Earnings</p>
//             </div>
//             <div style={styles.earningStat}>
//               <h3 style={styles.earningAmount}>{selectedMonth.deliveries}</h3>
//               <p style={styles.earningLabel}>Successful Deliveries</p>
//             </div>
//             <div style={styles.earningStat}>
//               <h3 style={styles.earningAmount}>{selectedMonth.cancelled}</h3>
//               <p style={styles.earningLabel}>Cancelled Orders</p>
//             </div>
//             <div style={styles.earningStat}>
//               <h3 style={styles.earningAmount}>
//                 {Math.round(selectedMonth.earnings / selectedMonth.deliveries)}
//               </h3>
//               <p style={styles.earningLabel}>Avg per Delivery</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Recent Months Performance */}
//       <div style={styles.earningsHistory}>
//         <div style={styles.sectionHeader}>
//           <h3 style={styles.sectionTitle}>
//             {showAllMonths ? 'Complete Earnings History' : 'Recent Months Performance'}
//           </h3>
//           <span
//             style={styles.viewAll}
//             onClick={handleViewAllClick}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#009688';
//               e.currentTarget.style.color = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'white';
//               e.currentTarget.style.color = '#009688';
//             }}
//           >
//             {showAllMonths ? 'Show Less' : 'View All'}
//           </span>
//         </div>

//         {isLoading ? (
//           <div style={styles.loadingSpinner}>
//             <div style={styles.spinner}></div>
//           </div>
//         ) : (
//           <>
//             <div style={styles.earningsList}>
//               {currentMonthsData.length > 0 ? (
//                 currentMonthsData.map((month, index) => (
//                   <div
//                     key={index}
//                     style={styles.earningItem}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = '#E0F2F1';
//                       e.currentTarget.style.borderColor = '#009688';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'white';
//                       e.currentTarget.style.borderColor = '#4DB6AC';
//                     }}
//                   >
//                     <div style={styles.earningDate}>
//                       <strong style={styles.earningDateText}>
//                         {month.label}
//                       </strong>
//                       <div style={styles.earningMeta}>
//                         <span style={styles.metaBadge}>{month.deliveries} deliveries</span>
//                         <span style={styles.metaBadge}>{month.cancelled} cancelled</span>
//                         <span style={styles.metaBadge}>
//                           {month.value.includes('january') ? '93%' :
//                            month.value.includes('december') ? '90%' :
//                            month.year === 2023 ? '85%' : '88%'} efficiency
//                         </span>
//                       </div>
//                     </div>
//                     <div style={styles.earningAmountItem}>
//                       {formatIndianCurrency(month.earnings)}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={styles.noData}>
//                   No earnings data available
//                 </div>
//               )}
//             </div>

//             {/* Pagination for View All */}
//             {showAllMonths && allMonthsData.length > itemsPerPage && (
//               <div style={styles.pagination}>
//                 <button
//                   style={{
//                     ...styles.paginationButton,
//                     ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
//                   }}
//                   onClick={handlePrevPage}
//                   disabled={currentPage === 1}
//                   onMouseEnter={(e) => {
//                     if (currentPage !== 1) {
//                       e.currentTarget.style.backgroundColor = '#009688';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.borderColor = '#009688';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (currentPage !== 1) {
//                       e.currentTarget.style.backgroundColor = 'white';
//                       e.currentTarget.style.color = '#124441';
//                       e.currentTarget.style.borderColor = '#4DB6AC';
//                     }
//                   }}
//                 >
//                   Previous
//                 </button>
//                 <span style={styles.paginationInfo}>
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   style={{
//                     ...styles.paginationButton,
//                     ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
//                   }}
//                   onClick={handleNextPage}
//                   disabled={currentPage === totalPages}
//                   onMouseEnter={(e) => {
//                     if (currentPage !== totalPages) {
//                       e.currentTarget.style.backgroundColor = '#009688';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.borderColor = '#009688';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (currentPage !== totalPages) {
//                       e.currentTarget.style.backgroundColor = 'white';
//                       e.currentTarget.style.color = '#124441';
//                       e.currentTarget.style.borderColor = '#4DB6AC';
//                     }
//                   }}
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Earnings;

import React, { useState, useEffect, useRef } from "react";

const Earnings = ({ deliveryData = {}, userId = "" }) => {
  const [earningFilter, setEarningFilter] = useState("today");
  const [showAllMonths, setShowAllMonths] = useState(false);
  const [allMonthsData, setAllMonthsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userEarnings, setUserEarnings] = useState(null);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [currentDeliveryAmount, setCurrentDeliveryAmount] = useState(0);

  const styles = {
    mainContent: {
      padding: "30px",
      minHeight: "100vh",
      backgroundColor: "#E0F2F1",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "30px",
    },
    greeting: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#124441",
      margin: "0 0 8px 0",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "5px",
    },
    userId: {
      fontSize: "14px",
      color: "#4F6F6B",
      backgroundColor: "#B2DFDB",
      padding: "2px 8px",
      borderRadius: "12px",
      fontWeight: "500",
    },
    subtitle: {
      fontSize: "16px",
      color: "#4F6F6B",
      margin: 0,
    },
    earningFilters: {
      display: "flex",
      gap: "8px",
      backgroundColor: "white",
      padding: "4px",
      borderRadius: "8px",
      border: "1px solid #4DB6AC",
      alignItems: "center",
    },
    earningFilter: {
      padding: "8px 16px",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      color: "#124441",
    },
    earningFilterActive: {
      backgroundColor: "#009688",
      color: "white",
    },
    monthDropdown: {
      marginLeft: "0",
    },
    monthSelect: {
      padding: "8px 12px",
      border: "1px solid #4DB6AC",
      borderRadius: "6px",
      fontSize: "14px",
      backgroundColor: "white",
      minWidth: "150px",
      color: "#124441",
    },
    earningsSummary: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,150,136,0.1)",
      marginBottom: "24px",
      border: "1px solid #E0F2F1",
    },
    earningStats: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    earningStat: {
      textAlign: "center",
      padding: "16px",
      backgroundColor: "#E0F2F1",
      borderRadius: "8px",
      border: "1px solid #4DB6AC",
    },
    earningAmount: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#009688",
      margin: "0 0 8px 0",
    },
    earningLabel: {
      fontSize: "14px",
      color: "#4F6F6B",
      margin: "0 0 12px 0",
      fontWeight: "500",
    },
    metricDetail: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      paddingTop: "12px",
      borderTop: "1px solid #4DB6AC",
    },
    metricValue: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#124441",
    },
    metricLabel: {
      fontSize: "12px",
      color: "#4F6F6B",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#124441",
      margin: "0 0 16px 0",
    },
    sectionHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    viewAll: {
      fontSize: "14px",
      color: "#009688",
      fontWeight: "500",
      cursor: "pointer",
      padding: "8px 16px",
      border: "1px solid #009688",
      borderRadius: "6px",
      transition: "all 0.3s ease",
      backgroundColor: "white",
    },
    viewAllHover: {
      backgroundColor: "#009688",
      color: "white",
    },
    earningsHistory: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,150,136,0.1)",
      marginBottom: "24px",
      border: "1px solid #E0F2F1",
    },
    earningsList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    earningItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "16px",
      border: "1px solid #4DB6AC",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      backgroundColor: "white",
    },
    earningItemHover: {
      backgroundColor: "#E0F2F1",
      borderColor: "#009688",
    },
    earningDate: {
      flex: 1,
    },
    earningDateText: {
      fontSize: "14px",
      color: "#124441",
      marginBottom: "8px",
      display: "block",
      fontWeight: "600",
    },
    earningMeta: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
    },
    metaBadge: {
      fontSize: "11px",
      padding: "4px 8px",
      backgroundColor: "#E0F2F1",
      color: "#4F6F6B",
      borderRadius: "12px",
      fontWeight: "500",
      border: "1px solid #4DB6AC",
    },
    earningAmountItem: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#009688",
    },
    loadingSpinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
    spinner: {
      width: "40px",
      height: "40px",
      border: "4px solid #E0F2F1",
      borderTop: "4px solid #009688",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    noData: {
      textAlign: "center",
      padding: "40px",
      color: "#4F6F6B",
      fontSize: "16px",
    },
    errorMessage: {
      backgroundColor: "#FFEBEE",
      color: "#C62828",
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "16px",
      border: "1px solid #FFCDD2",
      textAlign: "center",
    },
    syncButton: {
      padding: "8px 16px",
      backgroundColor: "#009688",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      marginLeft: "10px",
      transition: "all 0.3s ease",
    },
    syncButtonHover: {
      backgroundColor: "#00796B",
      transform: "scale(1.05)",
    },
    // OTP Modal Styles
    otpModal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    otpModalContent: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "12px",
      width: "90%",
      maxWidth: "400px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    },
    otpTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#124441",
      marginBottom: "10px",
      textAlign: "center",
    },
    otpSubtitle: {
      fontSize: "14px",
      color: "#4F6F6B",
      marginBottom: "20px",
      textAlign: "center",
    },
    otpContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
    },
    otpInput: {
      width: "45px",
      height: "50px",
      textAlign: "center",
      fontSize: "20px",
      border: "2px solid #4DB6AC",
      borderRadius: "8px",
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "white",
    },
    otpInputFocus: {
      borderColor: "#009688",
      boxShadow: "0 0 0 3px rgba(0, 150, 136, 0.2)",
    },
    otpButtonContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    otpButton: {
      flex: 1,
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    otpSubmitButton: {
      backgroundColor: "#009688",
      color: "white",
    },
    otpCancelButton: {
      backgroundColor: "#E0F2F1",
      color: "#124441",
      border: "1px solid #4DB6AC",
    },
    otpMessage: {
      fontSize: "14px",
      textAlign: "center",
      margin: "10px 0",
      minHeight: "20px",
    },
    otpSuccess: {
      color: "#2E7D32",
    },
    otpError: {
      color: "#C62828",
    },
    // Add Earnings Button
    addEarningsButton: {
      padding: "12px 24px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "20px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    addEarningsButtonHover: {
      backgroundColor: "#388E3C",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
    },
    actionButtons: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
  };

  // Initialize or load user earnings
  useEffect(() => {
    const loadUserEarnings = () => {
      if (!userId) {
        console.warn("No userId provided to Earnings component");
        return;
      }

      setIsLoading(true);

      try {
        // Check localStorage for existing user data
        const savedData = localStorage.getItem(`quickmed_earnings_${userId}`);

        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setUserEarnings(parsedData);
          console.log("Loaded earnings for user:", userId, parsedData);
        } else {
          // Initialize new user earnings data
          const initialData = initializeUserEarnings(userId);
          setUserEarnings(initialData);
          localStorage.setItem(
            `quickmed_earnings_${userId}`,
            JSON.stringify(initialData)
          );
          console.log(
            "Initialized earnings for new user:",
            userId,
            initialData
          );
        }
      } catch (error) {
        console.error("Error loading earnings data:", error);
        // Initialize with default data if error occurs
        const defaultData = initializeUserEarnings(userId);
        setUserEarnings(defaultData);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserEarnings();
  }, [userId]);

  // Initialize user earnings structure
  const initializeUserEarnings = (uid) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Generate 6 months of historical data
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - i, 1);
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      const monthName = monthNames[monthIndex];

      // Generate realistic random data
      const deliveries = Math.floor(Math.random() * 40) + 160; // 160-200 deliveries
      const earnings = deliveries * (Math.floor(Math.random() * 30) + 60); // 60-90 per delivery
      const cancelled = Math.floor(Math.random() * 10);

      months.push({
        month: monthName,
        year: year,
        earnings: earnings,
        deliveries: deliveries,
        cancelled: cancelled,
        average: Math.round(earnings / deliveries),
      });
    }

    // Calculate weekly and today data from current month
    const currentMonthData = months[months.length - 1] || months[0];
    const weekFactor = 0.25; // Assuming 4 weeks in a month
    const todayFactor = 0.04; // Assuming 25 days in a month

    const baseEarnings = currentMonthData.earnings;
    const baseDeliveries = currentMonthData.deliveries;
    const baseCancelled = currentMonthData.cancelled;

    return {
      userId: uid,
      totalEarnings: months.reduce((sum, month) => sum + month.earnings, 0),
      today: {
        earnings: Math.round(baseEarnings * todayFactor),
        deliveries: Math.round(baseDeliveries * todayFactor),
        cancelled: Math.round(baseCancelled * todayFactor),
        hours: 8.5,
      },
      week: {
        earnings: Math.round(baseEarnings * weekFactor),
        deliveries: Math.round(baseDeliveries * weekFactor),
        cancelled: Math.round(baseCancelled * weekFactor),
        hours: 42,
      },
      months: months,
    };
  };

  // Update earnings function
  const updateEarnings = (amount, deliveryType = "completed") => {
    if (!userId || !userEarnings) {
      console.error("Cannot update earnings: No userId or userEarnings");
      return false;
    }

    try {
      const updatedEarnings = { ...userEarnings };
      const now = new Date();
      const currentMonthIndex = now.getMonth();
      const currentYear = now.getFullYear();

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const currentMonthName = monthNames[currentMonthIndex];

      // Update today's earnings
      updatedEarnings.today.earnings += amount;
      if (deliveryType === "completed") {
        updatedEarnings.today.deliveries += 1;
      } else if (deliveryType === "cancelled") {
        updatedEarnings.today.cancelled += 1;
      }

      // Update weekly earnings
      updatedEarnings.week.earnings += amount;
      if (deliveryType === "completed") {
        updatedEarnings.week.deliveries += 1;
      } else if (deliveryType === "cancelled") {
        updatedEarnings.week.cancelled += 1;
      }

      // Update or create current month entry
      let currentMonth = updatedEarnings.months.find(
        (m) => m.month === currentMonthName && m.year === currentYear
      );

      if (!currentMonth) {
        // Create new month entry
        currentMonth = {
          month: currentMonthName,
          year: currentYear,
          earnings: amount,
          deliveries: deliveryType === "completed" ? 1 : 0,
          cancelled: deliveryType === "cancelled" ? 1 : 0,
          average: amount,
        };
        updatedEarnings.months.push(currentMonth);
      } else {
        // Update existing month
        currentMonth.earnings += amount;
        if (deliveryType === "completed") {
          currentMonth.deliveries += 1;
        } else if (deliveryType === "cancelled") {
          currentMonth.cancelled += 1;
        }
        currentMonth.average = Math.round(
          currentMonth.earnings / currentMonth.deliveries
        );
      }

      // Update total earnings
      updatedEarnings.totalEarnings += amount;

      // Save to state and localStorage
      setUserEarnings(updatedEarnings);
      localStorage.setItem(
        `quickmed_earnings_${userId}`,
        JSON.stringify(updatedEarnings)
      );

      console.log("Earnings updated:", updatedEarnings);
      return true;
    } catch (error) {
      console.error("Error updating earnings:", error);
      return false;
    }
  };

  // Handle OTP verification and earnings update
  const handleOTPSubmit = (otp) => {
    if (otp.length !== 6) {
      return { success: false, message: "Please enter a 6-digit OTP" };
    }

    // Simulate OTP verification (in real app, this would be an API call)
    const isValidOTP = otp === "123456" || /^\d{6}$/.test(otp); // Demo: accepts 123456 or any 6 digits

    if (isValidOTP) {
      const success = updateEarnings(currentDeliveryAmount, "completed");
      if (success) {
        setShowOTPModal(false);
        return {
          success: true,
          message: `Delivery completed! ₹${currentDeliveryAmount} added to your earnings.`,
        };
      } else {
        return {
          success: false,
          message: "Failed to update earnings. Please try again.",
        };
      }
    } else {
      return { success: false, message: "Invalid OTP. Please try again." };
    }
  };

  // Calculate metrics based on current filter
  const getFilteredMetrics = () => {
    if (!userEarnings) {
      return {
        totalEarnings: 0,
        totalDeliveries: 0,
        cancelledDeliveries: 0,
        averagePerDelivery: 0,
        efficiency: "0%",
        activeHours: "0h 0m",
      };
    }

    switch (earningFilter) {
      case "today":
        const todayTotal =
          userEarnings.today.deliveries + userEarnings.today.cancelled;
        return {
          totalEarnings: userEarnings.today.earnings,
          totalDeliveries: userEarnings.today.deliveries,
          cancelledDeliveries: userEarnings.today.cancelled,
          averagePerDelivery:
            userEarnings.today.deliveries > 0
              ? Math.round(
                  userEarnings.today.earnings / userEarnings.today.deliveries
                )
              : 0,
          efficiency:
            todayTotal > 0
              ? `${Math.round(
                  (userEarnings.today.deliveries / todayTotal) * 100
                )}%`
              : "0%",
          activeHours: `${Math.floor(userEarnings.today.hours)}h ${Math.round(
            (userEarnings.today.hours % 1) * 60
          )}m`,
        };
      case "week":
        const weekTotal =
          userEarnings.week.deliveries + userEarnings.week.cancelled;
        return {
          totalEarnings: userEarnings.week.earnings,
          totalDeliveries: userEarnings.week.deliveries,
          cancelledDeliveries: userEarnings.week.cancelled,
          averagePerDelivery:
            userEarnings.week.deliveries > 0
              ? Math.round(
                  userEarnings.week.earnings / userEarnings.week.deliveries
                )
              : 0,
          efficiency:
            weekTotal > 0
              ? `${Math.round(
                  (userEarnings.week.deliveries / weekTotal) * 100
                )}%`
              : "0%",
          activeHours: `${Math.floor(userEarnings.week.hours)}h ${Math.round(
            (userEarnings.week.hours % 1) * 60
          )}m`,
        };
      default:
        // For specific months from dropdown
        const [selectedMonthName, selectedYear] = earningFilter.split(" ");
        const selectedMonth = userEarnings.months.find(
          (m) =>
            m.month.toLowerCase() === selectedMonthName.toLowerCase() &&
            m.year.toString() === selectedYear
        );

        if (selectedMonth) {
          const monthTotal = selectedMonth.deliveries + selectedMonth.cancelled;
          return {
            totalEarnings: selectedMonth.earnings,
            totalDeliveries: selectedMonth.deliveries,
            cancelledDeliveries: selectedMonth.cancelled,
            averagePerDelivery: selectedMonth.average || 0,
            efficiency:
              monthTotal > 0
                ? `${Math.round(
                    (selectedMonth.deliveries / monthTotal) * 100
                  )}%`
                : "0%",
            activeHours: `${Math.floor(selectedMonth.earnings / 500)}h 30m`,
          };
        }

        // Default to current month
        const now = new Date();
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const currentMonthName = monthNames[now.getMonth()];
        const currentYear = now.getFullYear();

        const currentMonth = userEarnings.months.find(
          (m) => m.month === currentMonthName && m.year === currentYear
        );

        if (currentMonth) {
          const monthTotal = currentMonth.deliveries + currentMonth.cancelled;
          return {
            totalEarnings: currentMonth.earnings,
            totalDeliveries: currentMonth.deliveries,
            cancelledDeliveries: currentMonth.cancelled,
            averagePerDelivery: currentMonth.average || 0,
            efficiency:
              monthTotal > 0
                ? `${Math.round((currentMonth.deliveries / monthTotal) * 100)}%`
                : "0%",
            activeHours: `${Math.floor(currentMonth.earnings / 500)}h 30m`,
          };
        }

        return {
          totalEarnings: 0,
          totalDeliveries: 0,
          cancelledDeliveries: 0,
          averagePerDelivery: 0,
          efficiency: "0%",
          activeHours: "0h 0m",
        };
    }
  };

  const formatIndianCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  // Format time display
  const formatTime = (hours) => {
    const floorHours = Math.floor(hours);
    const minutes = Math.round((hours % 1) * 60);
    return `${floorHours}h ${minutes}m`;
  };

  // Handle sync with backend
  const syncEarnings = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In real app, fetch from backend and merge with local data
      // For now, just reload from localStorage
      const savedData = localStorage.getItem(`quickmed_earnings_${userId}`);
      if (savedData) {
        setUserEarnings(JSON.parse(savedData));
      }

      alert("Earnings synced successfully!");
    } catch (error) {
      console.error("Sync failed:", error);
      alert("Sync failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle manual earnings addition (for testing)
  const handleAddManualEarnings = () => {
    const amount = prompt("Enter earnings amount to add:");
    if (amount && !isNaN(amount) && parseInt(amount) > 0) {
      const success = updateEarnings(parseInt(amount), "completed");
      if (success) {
        alert(`Added ₹${amount} to your earnings!`);
      } else {
        alert("Failed to add earnings. Please try again.");
      }
    }
  };

  // Handle simulated delivery completion
  const handleSimulateDelivery = () => {
    const amount = Math.floor(Math.random() * 200) + 50; // Random amount between 50-250
    setCurrentDeliveryAmount(amount);
    setShowOTPModal(true);
  };

  // Get the selected month for details display
  const getSelectedMonth = () => {
    if (earningFilter === "today" || earningFilter === "week") {
      const now = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const currentMonthName = monthNames[now.getMonth()];
      const currentYear = now.getFullYear();

      return userEarnings?.months.find(
        (m) => m.month === currentMonthName && m.year === currentYear
      );
    } else {
      const [monthName, year] = earningFilter.split(" ");
      return userEarnings?.months.find(
        (m) =>
          m.month.toLowerCase() === monthName.toLowerCase() &&
          m.year.toString() === year
      );
    }
  };

  const metrics = getFilteredMetrics();
  const selectedMonth = getSelectedMonth();

  // Add CSS animation for spinner
  const spinnerStyles = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={styles.mainContent}>
      <style>{spinnerStyles}</style>

      {/* OTP Modal */}
      {showOTPModal && (
        <OTPModal
          amount={currentDeliveryAmount}
          onSubmit={handleOTPSubmit}
          onClose={() => setShowOTPModal(false)}
          styles={styles}
        />
      )}

      <div style={styles.header}>
        <div>
          <div style={styles.userInfo}>
            <h1 style={styles.greeting}>Earnings</h1>
            {userId && <span style={styles.userId}>ID: {userId}</span>}
          </div>
          <p style={styles.subtitle}>
            Track your delivery earnings and performance
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={styles.earningFilters}>
            <button
              style={{
                ...styles.earningFilter,
                ...(earningFilter === "today"
                  ? styles.earningFilterActive
                  : {}),
              }}
              onClick={() => setEarningFilter("today")}
              onMouseEnter={(e) => {
                if (earningFilter !== "today") {
                  e.currentTarget.style.backgroundColor = "#E0F2F1";
                }
              }}
              onMouseLeave={(e) => {
                if (earningFilter !== "today") {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
              disabled={isLoading || !userEarnings}
            >
              Today
            </button>
            <button
              style={{
                ...styles.earningFilter,
                ...(earningFilter === "week" ? styles.earningFilterActive : {}),
              }}
              onClick={() => setEarningFilter("week")}
              onMouseEnter={(e) => {
                if (earningFilter !== "week") {
                  e.currentTarget.style.backgroundColor = "#E0F2F1";
                }
              }}
              onMouseLeave={(e) => {
                if (earningFilter !== "week") {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
              disabled={isLoading || !userEarnings}
            >
              This Week
            </button>
            <div style={styles.monthDropdown}>
              <select
                value={earningFilter}
                onChange={(e) => setEarningFilter(e.target.value)}
                style={styles.monthSelect}
                disabled={isLoading || !userEarnings}
              >
                <option value="" disabled>
                  Select Month
                </option>
                {userEarnings &&
                  userEarnings.months.map((month, index) => (
                    <option key={index} value={`${month.month} ${month.year}`}>
                      {month.month} {month.year}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button
            style={styles.syncButton}
            onClick={syncEarnings}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00796B";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#009688";
              e.currentTarget.style.transform = "scale(1)";
            }}
            disabled={isLoading}
          >
            {isLoading ? "Syncing..." : "Sync"}
          </button>
        </div>
      </div>

      {/* Action Buttons for Testing */}
      <div style={styles.actionButtons}>
        <button
          style={styles.addEarningsButton}
          onClick={handleSimulateDelivery}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#388E3C";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(76, 175, 80, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4CAF50";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          disabled={isLoading || !userEarnings}
        >
          📦 Simulate Delivery Completion
        </button>
        <button
          style={{
            ...styles.addEarningsButton,
            backgroundColor: "#2196F3",
          }}
          onClick={handleAddManualEarnings}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1976D2";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(33, 150, 243, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2196F3";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          disabled={isLoading || !userEarnings}
        >
          ➕ Add Manual Earnings
        </button>
      </div>

      {!userId && (
        <div style={styles.errorMessage}>
          ⚠️ Please log in to view your earnings. Earnings data is
          user-specific.
        </div>
      )}

      {isLoading && !userEarnings ? (
        <div style={styles.loadingSpinner}>
          <div style={styles.spinner}></div>
        </div>
      ) : (
        <>
          {/* Earnings Summary */}
          <div style={styles.earningsSummary}>
            <div style={styles.earningStats}>
              <div style={styles.earningStat}>
                <h3 style={styles.earningAmount}>
                  {formatIndianCurrency(metrics.totalEarnings)}
                </h3>
                <p style={styles.earningLabel}>Total Earnings</p>
                <div style={styles.metricDetail}>
                  <span style={styles.metricValue}>{metrics.activeHours}</span>
                  <span style={styles.metricLabel}>Active Time</span>
                </div>
              </div>
              <div style={styles.earningStat}>
                <h3 style={styles.earningAmount}>{metrics.totalDeliveries}</h3>
                <p style={styles.earningLabel}>Total Deliveries</p>
                <div style={styles.metricDetail}>
                  <span style={styles.metricValue}>{metrics.efficiency}</span>
                  <span style={styles.metricLabel}>Efficiency</span>
                </div>
              </div>
              <div style={styles.earningStat}>
                <h3 style={styles.earningAmount}>
                  {metrics.cancelledDeliveries}
                </h3>
                <p style={styles.earningLabel}>Cancelled Orders</p>
                <div style={styles.metricDetail}>
                  <span style={styles.metricValue}>
                    {metrics.totalDeliveries + metrics.cancelledDeliveries > 0
                      ? Math.round(
                          (metrics.cancelledDeliveries /
                            (metrics.totalDeliveries +
                              metrics.cancelledDeliveries)) *
                            100
                        )
                      : 0}
                    %
                  </span>
                  <span style={styles.metricLabel}>Cancellation Rate</span>
                </div>
              </div>
              <div style={styles.earningStat}>
                <h3 style={styles.earningAmount}>
                  {formatIndianCurrency(metrics.averagePerDelivery)}
                </h3>
                <p style={styles.earningLabel}>Average per Delivery</p>
                <div style={styles.metricDetail}>
                  <span style={styles.metricValue}>
                    {earningFilter === "today"
                      ? userEarnings?.today.deliveries > 0
                        ? (userEarnings.today.deliveries / 8.5).toFixed(1)
                        : "0"
                      : earningFilter === "week"
                      ? userEarnings?.week.deliveries > 0
                        ? (userEarnings.week.deliveries / 42).toFixed(1)
                        : "0"
                      : selectedMonth
                      ? (selectedMonth.deliveries / 25).toFixed(1)
                      : "0"}
                  </span>
                  <span style={styles.metricLabel}>Deliveries/Hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Month Details Section */}
          {selectedMonth && (
            <div style={styles.earningsHistory}>
              <h3 style={styles.sectionTitle}>
                Month Details - {selectedMonth.month} {selectedMonth.year}
              </h3>
              <div style={styles.earningStats}>
                <div style={styles.earningStat}>
                  <h3 style={styles.earningAmount}>
                    {formatIndianCurrency(selectedMonth.earnings)}
                  </h3>
                  <p style={styles.earningLabel}>Total Earnings</p>
                </div>
                <div style={styles.earningStat}>
                  <h3 style={styles.earningAmount}>
                    {selectedMonth.deliveries}
                  </h3>
                  <p style={styles.earningLabel}>Successful Deliveries</p>
                </div>
                <div style={styles.earningStat}>
                  <h3 style={styles.earningAmount}>
                    {selectedMonth.cancelled}
                  </h3>
                  <p style={styles.earningLabel}>Cancelled Orders</p>
                </div>
                <div style={styles.earningStat}>
                  <h3 style={styles.earningAmount}>
                    {formatIndianCurrency(selectedMonth.average)}
                  </h3>
                  <p style={styles.earningLabel}>Avg per Delivery</p>
                </div>
              </div>
            </div>
          )}

          {/* Earnings History */}
          <div style={styles.earningsHistory}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>
                {showAllMonths
                  ? "Complete Earnings History"
                  : "Recent Months Performance"}
              </h3>
              {userEarnings && userEarnings.months.length > 6 && (
                <span
                  style={styles.viewAll}
                  onClick={() => setShowAllMonths(!showAllMonths)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#009688";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#009688";
                  }}
                >
                  {showAllMonths ? "Show Less" : "View All"}
                </span>
              )}
            </div>

            <div style={styles.earningsList}>
              {userEarnings && userEarnings.months.length > 0 ? (
                (showAllMonths
                  ? userEarnings.months
                  : userEarnings.months.slice(-6).reverse()
                ).map((month, index) => {
                  const monthTotal = month.deliveries + month.cancelled;
                  const efficiency =
                    monthTotal > 0
                      ? Math.round((month.deliveries / monthTotal) * 100)
                      : 0;

                  return (
                    <div
                      key={index}
                      style={styles.earningItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#E0F2F1";
                        e.currentTarget.style.borderColor = "#009688";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.borderColor = "#4DB6AC";
                      }}
                    >
                      <div style={styles.earningDate}>
                        <strong style={styles.earningDateText}>
                          {month.month} {month.year}
                        </strong>
                        <div style={styles.earningMeta}>
                          <span style={styles.metaBadge}>
                            {month.deliveries} deliveries
                          </span>
                          <span style={styles.metaBadge}>
                            {month.cancelled} cancelled
                          </span>
                          <span style={styles.metaBadge}>
                            {efficiency}% efficiency
                          </span>
                        </div>
                      </div>
                      <div style={styles.earningAmountItem}>
                        {formatIndianCurrency(month.earnings)}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={styles.noData}>
                  {userId
                    ? "No earnings data available. Complete deliveries to see earnings here."
                    : "Please log in to view earnings history."}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// OTP Modal Component
const OTPModal = ({ amount, onSubmit, onClose, styles }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // Clear message when user types
    setMessage({ text: "", type: "" });
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        // Move to previous input on backspace if current is empty
        inputRefs.current[index - 1].focus();
      } else if (otp[index]) {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      e.preventDefault();
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const pastedArray = pastedData.split("");
      setOtp(pastedArray);
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setMessage({ text: "Please enter a 6-digit OTP", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: "Verifying OTP...", type: "info" });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = onSubmit(otpString);
    setMessage({
      text: result.message,
      type: result.success ? "success" : "error",
    });

    if (result.success) {
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div style={styles.otpModal} onClick={handleCancel}>
      <div style={styles.otpModalContent} onClick={(e) => e.stopPropagation()}>
        <h3 style={styles.otpTitle}>Enter OTP</h3>
        <p style={styles.otpSubtitle}>
          Enter the 6-digit OTP received for delivery completion
          <br />
          <strong>Earnings: {formatIndianCurrency(amount)}</strong>
        </p>

        <div style={styles.otpContainer} onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={(e) => e.target.select()}
              style={{
                ...styles.otpInput,
                ...(document.activeElement === inputRefs.current[index]
                  ? styles.otpInputFocus
                  : {}),
              }}
              disabled={isSubmitting}
            />
          ))}
        </div>

        {message.text && (
          <p
            style={{
              ...styles.otpMessage,
              ...(message.type === "success"
                ? styles.otpSuccess
                : message.type === "error"
                ? styles.otpError
                : {}),
            }}
          >
            {message.text}
          </p>
        )}

        <div style={styles.otpButtonContainer}>
          <button
            style={{
              ...styles.otpButton,
              ...styles.otpCancelButton,
              ...(isSubmitting ? { opacity: 0.6, cursor: "not-allowed" } : {}),
            }}
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            style={{
              ...styles.otpButton,
              ...styles.otpSubmitButton,
              ...(isSubmitting ? { opacity: 0.6, cursor: "not-allowed" } : {}),
            }}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#666",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          Demo OTP: <strong>123456</strong> or any 6 digits
        </p>
      </div>
    </div>
  );
};

// Helper function for currency formatting
const formatIndianCurrency = (amount) => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

export default Earnings;
