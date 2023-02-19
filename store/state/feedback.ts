import { create } from 'zustand';
import { FeedbackModel } from '../../models';
import { feedBackItems } from '../data';

export const useFeedBackStore = create<FeedbackModel>(() => feedBackItems[0]);
