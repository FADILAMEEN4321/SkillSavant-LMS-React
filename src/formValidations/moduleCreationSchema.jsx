import * as Yup from 'yup';

export const moduleCreationSchema = Yup.object().shape({
  module_title: Yup.string().required('Module title is required'),
  module_order: Yup.number().required('Module order is required'),
  duration: Yup.number().required('Duration is required'),
  video_url: Yup.mixed()
    .required('Video file is required')
    .test(
      'fileFormat',
      'Invalid file format. Only .mp4 files are allowed.',
      (value) => {
        if (value) {
          return ['video/mp4'].includes(value.type);
        }
        return true; // Return true if the file is not selected
      }
    )
    .test(
        'fileSize',
        'File size is too large. Maximum size allowed is 100MB.',
        (value) => {
          if (value) {
            return value.size <= 100 * 1024 * 1024; // 100MB in bytes
          }
          return true; // Return true if the file is not selected
        }
      ),
    
})