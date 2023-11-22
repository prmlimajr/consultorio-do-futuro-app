import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from 'react-native-heroicons/outline';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        borderLeftColor: '#23A047',
        backgroundColor: '#EEFFF3',
        borderRadius: 0,
      }}
      text1Props={{
        style: {
          color: '#242424',
          fontSize: 14,
          marginLeft: -16,
        },
      }}
      text1NumberOfLines={2}
      renderLeadingIcon={() => (
        <CheckCircleIcon
          width={24}
          height={24}
          color="#23A047"
          style={{ marginTop: 18, marginLeft: 16 }}
        />
      )}
      renderTrailingIcon={() => (
        <XMarkIcon
          width={24}
          height={24}
          color="#242424"
          style={{ marginTop: 18, marginRight: 16 }}
        />
      )}
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        borderLeftColor: '#F44336',
        backgroundColor: '#FFF3F3',
        borderRadius: 0,
      }}
      text1Props={{
        style: { color: '#242424', fontSize: 14, marginLeft: -16 },
      }}
      text1NumberOfLines={2}
      renderLeadingIcon={() => (
        <XCircleIcon
          width={24}
          height={24}
          color="#F44336"
          style={{ marginTop: 18, marginLeft: 16 }}
        />
      )}
      renderTrailingIcon={() => (
        <XMarkIcon
          width={24}
          height={24}
          color="#242424"
          style={{ marginTop: 18, marginRight: 16 }}
        />
      )}
    />
  ),
  info: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        borderLeftColor: '#0052EA',
        backgroundColor: '#F1F6FD',
        borderRadius: 0,
      }}
      text1Props={{
        style: { color: '#242424', fontSize: 14, marginLeft: -16 },
      }}
      text1NumberOfLines={2}
      renderLeadingIcon={() => (
        <InformationCircleIcon
          width={24}
          height={24}
          color="#0052EA"
          style={{ marginTop: 18, marginLeft: 16 }}
        />
      )}
      renderTrailingIcon={() => (
        <XMarkIcon
          width={24}
          height={24}
          color="#242424"
          style={{ marginTop: 18, marginRight: 16 }}
        />
      )}
    />
  ),
  alert: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        width: '95%',
        borderLeftColor: '#FCA004',
        backgroundColor: '#FFFBED',
        borderRadius: 0,
      }}
      text1Props={{
        style: { color: '#242424', fontSize: 14, marginLeft: -16 },
      }}
      text1NumberOfLines={2}
      renderLeadingIcon={() => (
        <ExclamationTriangleIcon
          width={24}
          height={24}
          color="#FCA004"
          style={{ marginTop: 18, marginLeft: 16 }}
        />
      )}
      renderTrailingIcon={() => (
        <XMarkIcon
          width={24}
          height={24}
          color="#242424"
          style={{ marginTop: 18, marginRight: 16 }}
        />
      )}
    />
  ),
};
