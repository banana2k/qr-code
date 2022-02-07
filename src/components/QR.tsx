export default function QR() {
  return (
    <div className="bg-white p-4 rounded-2xl max-w-xs">
      <img src="assets/images/image-qr-code.png" alt="Qr" />

      <div className="mt-4 p-3 text-center">
        <h3 className="text-xl">
          Improve your front-end skills by building projects
        </h3>

        <p className="mt-2 text-secondary-900">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
