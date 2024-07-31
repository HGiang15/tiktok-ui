import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7e55d6bc59682d3dce56dbdf9ce96f01~c5_100x100.jpeg?lk3s=a5d48078&nonce=36684&refresh_token=5caaf0dc6c912ead418580501bf2abe3&x-expires=1722571200&x-signature=4D%2Bw%2BpWQzO6as2Ippv8UEryJHGc%3D&shp=a5d48078&shcp=81f88b70"
                alt="HG"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Giang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>h_giang15</span>
            </div>
        </div>
    );
}

export default AccountItem;
