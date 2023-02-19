export interface ProstateCancerCard {
    gleasonScore: string;
    gleasonScoreDate: string;
    tumorStageScore: string;
    tumorStageT: string;
    tumorStageN: string;
    tumorStageM: string;
    treatmentHistory: Treatment[];
}

export interface Treatment {
    treatment: string;
    treatmentDate: string;
}