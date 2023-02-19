import { FeedbackModel } from '../../models';
import { useFeedBackStore } from '../state';

export const onAddNewFeedBack = (options: FeedbackModel) => {
  useFeedBackStore.setState(() => options);
};
