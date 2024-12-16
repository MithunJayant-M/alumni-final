// import { Link } from 'react-router-dom';

// export default function Product ({product, col}) {
//     return (
//         <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
//             <div className="card p-3 rounded">
//                 {product.images.length > 0 &&
//                 <img
//                 className="card-img-top mx-auto"
//                 src={product.images[0].image}
//                 alt={product.name}
//                 />}
//                 <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                     <Link to={`/product/${product._id}`}>{product.name}</Link>
//                 </h5>
//                 <div className="ratings mt-auto">
//                     <div className="rating-outer">
//                     <div className="rating-inner" style={{width: `${product.ratings/ 5 * 100}%` }}></div>
//                     </div>
//                     <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
//                 </div>
//                 <p className="card-text">${product.price}</p>
//                 <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { Link } from 'react-router-dom';

export default function Profile({ profile, col }) {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded">
                {profile.ProfileThumbnail && (
                    <img
                        className="card-img-top mx-auto"
                        src={profile.ProfileThumbnail}
                        alt={profile.FullName}
                    />
                )}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/profile/${profile._id}`}>{profile.FullName}</Link>
                    </h5>
                    <p className="card-text">{profile.JobTitle || 'N/A'}</p>
                    <p className="card-text">{profile.LocationArea || 'Location not available'}</p>
                    {profile.LinkedInSchoolURL && (
                        <a
                            href={profile.ProfileURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-auto"
                        >
                            View LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
