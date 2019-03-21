export default function(doc: any, ret: any) {
    delete ret.__v;
    delete ret._id;
    delete ret.createdAt;
    delete ret.updatedAt;
}
