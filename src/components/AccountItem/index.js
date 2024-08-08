import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7e55d6bc59682d3dce56dbdf9ce96f01~c5_720x720.jpeg?lk3s=a5d48078&nonce=18434&refresh_token=9f4c1ed60a867802942cc10f7679e582&x-expires=1723215600&x-signature=8TxVP2%2FLgZKsdeceUFcEHpw45m0%3D&shp=a5d48078&shcp=81f88b70"
                alt="HG"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van AB</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>h_giang1505</span>
            </div>
        </div>
    );
}

export default AccountItem;
