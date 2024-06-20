import "../../styles/BasketPage.scss";
import images from '../../utils/images';

const PaymentMethods = () => {
  return (
    <div>
        <div className='payment-methods py-4 bg-white px-4'>
            <h3>Méthode de paiement</h3>
            <div className='flex align-center justify-start payment-methods-list py-3'>
                <div className='payment-item'>
                    <img src = {images.visa} alt = "" />
                </div>
                <div className='payment-item'>
                    <img src = {images.ucb} alt = "" />
                </div>
                <div className='payment-item'>
                    <img src = {images.mastercard} alt = "" />
                </div>
                <div className='payment-item'>
                    <img src = {images.americanexpress} alt = "" />
                </div>
            </div>
            <h3 className='py-2'>Protection de l'acheteur</h3>
            <p className='fs-14'>Obtenez un remboursement intégral si l'article n'est pas conforme à la description ou s'il n'est pas livré</p>
        </div>
    </div>
  )
}

export default PaymentMethods
